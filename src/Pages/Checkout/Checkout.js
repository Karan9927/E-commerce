import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, clearCart, toggleSignIn } from "../../features/Slice";
import { useContext, useState } from "react";
import CheckoutCard from "../../Components/Checkout/CheckoutCard";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import productContext from "../../Context/productContext";

const Checkout = () => {
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const context = useContext(productContext);
  const { getOrdersData } = context;
  const user = JSON.parse(localStorage.getItem("user"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [billingAddress, setBillingAddress] = useState();

  const openSignIn = () => {
    dispatch(toggleSidebar());
    dispatch(toggleSignIn());
  };

  const handleBilling = () => {
    if (
      lastName === "" ||
      firstName === "" ||
      address === "" ||
      suburb === "" ||
      country === "" ||
      state === "" ||
      postcode === ""
    ) {
      toast.error("Enter correct billing address ! ");
    } else {
      const billing = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        suburb: suburb,
        country: country,
        state: state,
        postcode: postcode,
      };
      setBillingAddress(billing);
      setLastName("");
      setFirstName("");
      setAddress("");
      setSuburb("");
      setCountry("");
      setState("");
      setPostcode("");
      window.scrollTo(0, 0);
    }
  };

  const subTotal = items.reduce((acc, item) => {
    const total = item.price * item.quantity;
    return acc + total;
  }, 0);
  const shipping = 10;
  const grandTotal = subTotal + shipping;

  const buyNow = async () => {
    var options = {
      key: "rzp_test_SQn4EaE6OD3WIy",
      key_secret: "UhJaRT7SHzAliJYiMYCxfmpC",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + user.name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;
        // store in firebase
        const orderInfo = {
          items,
          billingAddress,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const result = addDoc(collection(fireDB, "orders"), orderInfo);
          dispatch(clearCart());
          localStorage.removeItem("cart");
          navigate("/");
          getOrdersData();
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <div className="mx-6 mb-20">
      <div className="mt-32 mb-20">
        <h2 className="text-6xl font-extrabold">CHECKOUT</h2>
      </div>
      <div className="flex justify-between">
        <div className="w-full pr-40">
          <div>
            {user ? (
              <div className="flex items-center gap-5 py-8 border-gray-400 border-y">
                <h2 className="text-3xl font-extrabold">CUSTOMER</h2>
                <p>{user.user.email}</p>
              </div>
            ) : (
              <div className="flex items-center gap-5 py-8 border-gray-400 border-y">
                <h2 className="text-3xl font-extrabold">CUSTOMER</h2>
                <div>
                  <p className="mt-1 text-lg">
                    Have an account?{" "}
                    <span
                      onClick={openSignIn}
                      className="cursor-pointer hover:text-blue-500"
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className={`py-8 border-b border-gray-400 ${
                billingAddress ? "flex gap-5 items-center" : ""
              }`}
            >
              <h2 className="text-3xl font-extrabold">SHIPPING</h2>
              <div>
                {billingAddress ? (
                  <div className="text-sm">
                    <p>
                      {billingAddress.firstName} {billingAddress.lastName}
                    </p>
                    <p>
                      {billingAddress.address} / {billingAddress.suburb}
                    </p>
                    <p>
                      {billingAddress.state}, {billingAddress.postcode} /{" "}
                      {billingAddress.country}
                    </p>
                  </div>
                ) : (
                  <>
                    <legend className="mt-20 text-3xl mb-[20px] pb-4">
                      Shipping Address
                    </legend>
                    <div>
                      <div className="flex gap-5">
                        <div className="flex flex-col flex-1 my-2">
                          <label>First Name</label>
                          <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                            type="name"
                          />
                        </div>
                        <div className="flex flex-col flex-1 my-2">
                          <label>Last Name</label>
                          <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                            type="name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col my-2">
                        <label>
                          Company Name
                          <span className="ml-1 text-sm text-gray-500">
                            (Optional)
                          </span>
                        </label>
                        <input
                          className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label>
                          Phone Number
                          <span className="ml-1 text-sm text-gray-500">
                            (Optional)
                          </span>
                        </label>
                        <input
                          className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label>Address</label>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                          type="address"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label>
                          Apartment/Suite/Building
                          <span className="ml-1 text-sm text-gray-500">
                            (Optional)
                          </span>
                        </label>
                        <input
                          className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label>Suburb</label>
                        <input
                          value={suburb}
                          onChange={(e) => setSuburb(e.target.value)}
                          required
                          className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label>Country</label>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                          className="p-3 mt-2 text-sm border border-gray-400 rounded-sm"
                        >
                          <option>Select a country</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex flex-col flex-1 my-2">
                          <label>
                            State/Province
                            <span className="ml-1 text-sm text-gray-500">
                              (Optional)
                            </span>
                          </label>
                          <input
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                            className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-col flex-1 my-2">
                          <label>Postal Code</label>
                          <input
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            required
                            className="py-2 mt-2 border-b border-gray-400 focus:outline-none"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleBilling}
                      className="p-3 px-8 my-5 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-700"
                    >
                      CONTINUE
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 py-8 border-b border-gray-500">
            <div>
              <h2 className="text-3xl font-extrabold">BILLING</h2>
            </div>
            {billingAddress ? (
              <div className="text-sm">
                <p>
                  {billingAddress.firstName} {billingAddress.lastName}
                </p>
                <p>
                  {billingAddress.address} / {billingAddress.suburb}
                </p>
                <p>
                  {billingAddress.state}, {billingAddress.postcode} /{" "}
                  {billingAddress.country}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="py-8">
            <h2 className="text-3xl font-extrabold">PAYMENT</h2>
            {billingAddress ? (
              <button
                onClick={buyNow}
                className="p-3 px-8 my-5 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-700"
              >
                BUY NOW
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-[45%]">
          <div className="py-8 border-gray-500 border-y">
            <h3 className="text-3xl font-extrabold">ORDER SUMMARY</h3>
            <div>
              {items.map((item) => (
                <CheckoutCard data={item} />
              ))}
            </div>
          </div>
          <div className="py-6 text-lg border-b border-gray-500">
            <div className="flex justify-between font-semibold">
              <p>Subtotal</p>
              <p>${subTotal}.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping}.00</p>
            </div>
          </div>
          <div className="py-6 text-lg border-b border-gray-500">
            <div className="flex justify-between font-semibold">
              <p>Grand Total</p>
              <p>${grandTotal}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
