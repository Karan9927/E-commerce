import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCartQuantity,
  deleteCartItem,
  minusCartQuantity,
  toggleCart,
} from "../../features/Slice";
import gsap from "gsap";

const Cart = ({ isOpen }) => {
  const divRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (divRef.current) {
      const tl = gsap.timeline();
      tl.from(divRef.current, {
        opacity: 0,
        duration: 2,
      });
    }
  }, [divRef]);

  const items = useSelector((state) => state.cart);
  const cartTotal = items.reduce((acc, item) => {
    const totalPrice = item.price * item.quantity;
    return totalPrice + acc;
  }, 0);
  const dispatch = useDispatch();

  const addQuantityHandler = (itemId) => {
    dispatch(addCartQuantity(itemId));
  };
  const minusQuantityHandler = (itemId) => {
    dispatch(minusCartQuantity(itemId));
  };
  const deleteCartItemHandler = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const handleCheckout = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      {items && Object.keys(items).length === 0 ? (
        <div
          className={`absolute z-10 w-full h-screen mt-[-132px] bg-black text-white duration-300 ${
            isDown ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="text-center py-36">
            <div>
              <p className="text-3xl">Your cart is empty !</p>
              <Link to={"/shop"}>
                <button className="p-5 my-5 font-semibold uppercase duration-300 border border-white px-14 text-md hover:text-black hover:bg-white rounded-3xl">
                  See all the good things
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <Marquee autoFill>
              <div className="border-white border-y ">
                <p className="text-[80px] font-[futura] mx-7">CART</p>
              </div>
            </Marquee>
            <Marquee autoFill direction="right">
              <div className="border-b border-white">
                <p className="text-[80px] font-[futura] mx-7">EMPTY</p>
              </div>
            </Marquee>
          </div>
        </div>
      ) : (
        <div
          className={`absolute z-10 w-full mt-[-132px] bg-black text-white duration-300 ${
            isDown ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <div ref={divRef} className="pt-32">
            <div className="flex justify-between mx-6 text-[10px] text-gray-500 font-semibold border-b border-gray-500 py-7">
              <p className="flex-1">CART</p>
              <p className="flex-1 text-center b">QUANTITY</p>
              <p className="flex-1"></p>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mx-6 border-b border-gray-600 py-7"
              >
                <p className="flex-1 uppercase text-[14px]">{item.name}</p>
                <div className="flex items-center justify-center flex-1 gap-5">
                  <button
                    onClick={() => minusQuantityHandler(item.id)}
                    className="duration-300 hover:scale-150"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => addQuantityHandler(item.id)}
                    className="duration-300 hover:scale-150"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-end flex-1 gap-5">
                  <p className="text-[12px]">${item.price}</p>
                  <button
                    onClick={() => deleteCartItemHandler(item.id)}
                    className="text-[12px] hover:scale-150 duration-300"
                  >
                    <RxCross1 />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <div className="flex uppercase font-semibold text-gray-500 text-[14px] my-5 justify-between w-1/2 px-6 pl-14 ">
                <p>Delivery</p>
                <p className="text-white">Shipping calculated at check-out</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex uppercase font-semibold text-gray-500 text-[14px] justify-between w-1/2 px-6 pl-14 ">
                <p>Subtotal</p>
                <p className="text-white">${cartTotal}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-1/2 my-10 px-14">
                <Link to={"/checkout"}>
                  <button
                    onClick={handleCheckout}
                    className="w-full p-5 font-semibold duration-300 border border-white hover:bg-white hover:text-black rounded-3xl"
                  >
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-6 border-t border-gray-500">
            <h2 className="leading-none py-8 w-3/4 font-[futura] text-[72px]">
              THANK YOU FOR WALKING ALONGSIDE VULNERABLE WOMEN AS THEY FIND
              THEIR WAY HOME AGAIN.
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
