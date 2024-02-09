import React, { useContext, useEffect } from "react";
import productContext from "../../Context/productContext";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../features/Slice";

const Orders = () => {
  const context = useContext(productContext);
  const dispatch = useDispatch();
  const { orders } = context;
  const currentUser = useSelector((state) => state.user?.user?.email);
  const userOrders = orders.filter((order) => order.email === currentUser);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toggleSidebar());
  });
  const dateString = userOrders[0]?.date;
  const originalDate = new Date(dateString);
  const newDate = new Date(originalDate);
  newDate.setDate(newDate.getDate() + 6);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const deliveryDate = newDate.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="mb-48 ">
        <h3 className="my-10 text-5xl text-center">ORDERS</h3>
        {userOrders.length === 0 ? (
          <div className="flex justify-center my-56">
            <div className="text-center">
              <p className="my-5 text-4xl font-bold uppercase font-[futura]">
                No Orders to show !
              </p>
              <Link to={"/shop"}>
                <button className="p-4 px-20 text-white bg-black border border-black hover:text-black hover:bg-white rounded-3xl">
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-20 mx-6 my-20">
            {userOrders[0]?.items.map((item) => (
              <div key={item.id} className="pb-5 rounded-md shadow-md">
                <div className="flex justify-between p-3 my-8 bg-gray-100 border">
                  <div className="flex gap-20">
                    <div>
                      <p className="text-sm font-semibold uppercase">
                        Order placed
                      </p>
                      <p>{userOrders[0].date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase">Ship to</p>
                      <p>
                        {userOrders[0].billingAddress.firstName}{" "}
                        {userOrders[0].billingAddress.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase">
                        Shipping Address
                      </p>
                      <p>
                        {userOrders[0].billingAddress.address},
                        {userOrders[0].billingAddress.state}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase">
                      ORDER # {userOrders[0].paymentId}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="px-4 pb-4 text-2xl font-bold">
                    Delivery - {deliveryDate}
                  </h4>
                  <div className="flex">
                    <Link to={`/shop/${item.id}`}>
                      <div>
                        <img className="w-40" src={item.img_url} />
                      </div>
                    </Link>
                    <div className="mt-2 ml-5 uppercase">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm">${item.price}</p>
                      <div className="my-4">
                        <Link to={`/shop/${item.id}`}>
                          <button className="p-1 px-4 text-white duration-300 bg-black border border-black hover:text-black hover:bg-white rounded-3xl">
                            But it again
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
