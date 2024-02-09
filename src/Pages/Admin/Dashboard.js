import React, { useContext, useEffect, useState } from "react";
import productContext from "../../Context/productContext";
import { FiPlus } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const context = useContext(productContext);
  const { addProducts, products, deleteProduct, users, orders } = context;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showProducts, setShowProducts] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [img_url, setImg_url] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const productHandler = (event) => {
    event.preventDefault();
    const item = {
      id: nanoid(),
      quantity: 1,
      info1: info1,
      info2: info2,
      bColor: "#E6E6E6",
      tColor: "#000000",
      "impact-img1": img1 ? img1 : "",
      "impact-img2": img2 ? img2 : "",
      "impact-img3": img3 ? img3 : "",
      "impact-img4": img4 ? img4 : "",
      price: price,
      category: category,
      name: name,
      img_url: img_url,
    };
    addProducts(item);
    setName("");
    setPrice("");
    setCategory("");
    setImg_url("");
    setInfo1("");
    setInfo2("");
    setImg1("");
    setImg2("");
    setImg3("");
    setImg4("");
    setShowForm(false);
  };

  const filteredUserList = users.filter(
    (user) => user.email !== "karan@gmail.com"
  );
  const handleOrders = () => {
    setShowOrders(true);
    setShowUsers(false);
    setShowProducts(false);
  };
  const handleUsers = () => {
    setShowOrders(false);
    setShowUsers(true);
    setShowProducts(false);
  };
  const handleProducts = () => {
    setShowOrders(false);
    setShowUsers(false);
    setShowProducts(true);
  };
  const deleteHandler = (item) => {
    deleteProduct(item);
  };

  const confirmOrder = () => {
    toast.success("Order Confirmed");
  };
  return (
    <div className="relative">
      <div className="mx-6 ">
        <div className="flex justify-center">
          <div
            onClick={handleUsers}
            className="flex flex-col items-center justify-center gap-2 p-10 mx-6 text-xl duration-300 border rounded-md shadow-lg cursor-pointer px-14 hover:scale-110"
          >
            <div className="text-3xl">
              <FaUser />
            </div>
            <p>Users</p>
            <p>{users.length}</p>
          </div>
          <div
            onClick={handleOrders}
            className="flex flex-col items-center justify-center gap-2 p-10 mx-6 text-xl duration-300 border rounded-md shadow-lg cursor-pointer px-14 hover:scale-110"
          >
            <div className="text-3xl">
              <FaClipboardCheck />
            </div>
            <p>Orders</p>
            <p>{orders.length}</p>
          </div>
          <div
            onClick={handleProducts}
            className="flex flex-col items-center justify-center gap-2 p-10 mx-6 text-xl duration-300 border rounded-md shadow-lg cursor-pointer px-14 hover:scale-110"
          >
            <div className="text-3xl">
              <FaCartShopping />
            </div>
            <p>Products</p>
            <p>{products.length}</p>
          </div>
        </div>
        {showForm && showProducts ? (
          <div className="flex justify-center">
            <form
              onSubmit={productHandler}
              className="p-5 w-[85%] mt-4 text-center border shadow-md addProduct"
            >
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border"
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border"
                  type="text"
                  placeholder="Category"
                />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border"
                  type="number"
                  placeholder="Price"
                />
                <input
                  value={info1}
                  onChange={(e) => setInfo1(e.target.value)}
                  className="border"
                  type="text"
                  placeholder="Info"
                />
                <input
                  value={info2}
                  onChange={(e) => setInfo2(e.target.value)}
                  className="border"
                  type="text"
                  placeholder="Additinal Info"
                />
                <input
                  value={img_url}
                  onChange={(e) => setImg_url(e.target.value)}
                  className="border"
                  type="text"
                  placeholder="Display Image"
                />
              </div>
              <div className="flex items-center mx-20 justify-evenly">
                <p className="font-[futura] text-gray-500 uppercase">
                  Optionals
                </p>
                <div>
                  <input
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                    className="border"
                    type="text"
                    placeholder="Impact Image-1"
                  />
                  <input
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                    className="border"
                    type="text"
                    placeholder="Impact Image-2"
                  />
                  <input
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                    className="border"
                    type="text"
                    placeholder="Impact Image-3"
                  />
                  <input
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
                    className="border"
                    type="text"
                    placeholder="Impact Image-4"
                  />
                  <input
                    type="submit"
                    className="p-2 px-20 w-[200px] font-[futura] mx-1 font-semibold uppercase duration-300 border border-black rounded-md hover:text-white hover:bg-black"
                  />
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {showProducts && (
          <div className="my-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 my-2 border"
              >
                <div className="flex">
                  <img
                    className="mr-5 w-44"
                    alt="products"
                    src={item.img_url}
                  />
                  <div className="flex flex-col justify-around">
                    <div>
                      <p className="uppercase ">{item.name}</p>
                    </div>
                    <div>
                      <p className="uppercase">{item.category}</p>
                      <p className="text-xs">${item.price}</p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => deleteHandler(item)}
                  className="mx-5 text-2xl cursor-pointer hover:animate-bounce"
                >
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>
        )}
        {showUsers && (
          <div className="flex justify-center my-20">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 border border-black">UID</th>
                  <th className="px-4 py-3 border border-black">Name</th>
                  <th className="px-4 py-3 border border-black">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredUserList.map((user) => (
                  <tr key={user.uid} className="">
                    <td className="px-4 py-3 font-semibold text-center border border-black">
                      {user.uid}
                    </td>
                    <td className="px-4 py-3 font-semibold text-center border border-black">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 font-semibold text-center border border-black">
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showOrders && (
          <div className="px-20 mx-6 my-20">
            {orders.map((order, index) => (
              <li className="list-decimal list-inside">
                <div key={index} className="p-2 mb-10 border rounded-md">
                  <div className="text-3xl font-semibold">
                    User ID: {order.userid}
                  </div>

                  {order.items.map((item, itemIndex) => (
                    <div key={item.id} className="pb-5 rounded-md shadow-md">
                      <div className="flex justify-between p-3 my-8 bg-gray-100 border">
                        <div className="flex gap-20">
                          <div>
                            <p className="text-sm font-semibold uppercase">
                              Order placed
                            </p>
                            <p>{order.date}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase">
                              Ship to
                            </p>
                            <p>
                              {order.billingAddress.firstName}{" "}
                              {order.billingAddress.lastName}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase">
                              Shipping Address
                            </p>
                            <p>
                              {order.billingAddress.address},
                              {order.billingAddress.state}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase">
                            ORDER # {order.paymentId}
                          </p>
                        </div>
                      </div>
                      <div>
                        {/* <h4 className="px-4 pb-4 text-2xl font-bold">
                            Delivery - {deliveryDate}
                          </h4> */}
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
                              <button
                                onClick={confirmOrder}
                                className="p-1 px-4 text-white duration-300 bg-black border border-black hover:text-black hover:bg-white rounded-3xl"
                              >
                                Confirm Order
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </div>
        )}
      </div>
      <div
        onClick={() => setShowForm(true)}
        className="fixed right-0 p-2 text-4xl text-white duration-300 bg-black border border-black rounded-full cursor-pointer bottom-10 hover:bg-white hover:text-black"
      >
        <FiPlus />
      </div>
    </div>
  );
};

export default Dashboard;
