import React, { useContext, useEffect, useRef } from "react";
import ShopCard from "../../Components/Shop/ShopCard";
import gsap from "gsap";
import productContext from "../../Context/productContext";
import { useDispatch } from "react-redux";

const Shop = () => {
  const context = useContext(productContext);
  const { products } = context;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textRef1.current, {
      y: 100,
      opacity: 0,
      duration: 0.4,
    })
      .from(textRef2.current, {
        y: 100,
        opacity: 0,
        duration: 0.4,
      })
      .from(textRef3.current, {
        y: 50,
        opacity: 0,
        duration: 0.4,
      });
  });
  return (
    <div className="px-6">
      <div className="flex items-start justify-between h-screen py-36">
        <div className="shop-headdiv text-[10vw] cursor-pointer leading-none font-[futura]">
          <div ref={textRef1} className="overflow-hidden h-30 ">
            GOOD
          </div>
          <div
            ref={textRef2}
            className="flex items-center overflow-hidden h-30"
          >
            THINGS
          </div>
          <div className="w-0 h-1 bg-black head-line"></div>
        </div>
        <div ref={textRef3} className="font-[helvetica]  w-[400px]">
          We create high quality, sustainable, luxurious products - toiletries,
          apparel, blankets, candles. Basically, things that feel like home. The
          best part? With every single purchase, you have the potential to
          change the course of someone’s life.
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-between mb-20">
        {products.map((item) => (
          <ShopCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
