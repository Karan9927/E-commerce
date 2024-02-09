import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";
import productContext from "../../Context/productContext";

const Products = () => {
  const context = useContext(productContext);
  const { products } = context;
  // const productData = useSelector((state) => state.products);
  const productData = products;
  const messina = productData.filter(
    (product) => product.category === "messina"
  );
  const gifts = productData.filter((product) => product.category === "gifts");
  const bath = productData.filter((product) => product.category === "bath");
  return (
    <div>
      <div className="flex justify-between mx-4 text-xs border-b border-black lg:mx-6">
        <p>BUY GOOD</p>
        <p>DO GOOD</p>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col justify-between h-screen gap-2 px-4 pt-4 lg:gap-0 md:gap-5 lg:px-6 md:flex-col lg:flex-row md:h-full sm:flex-col">
          <ProductCard
            data={messina}
            name="Messina"
            color="#E5F0D6"
            image="https://cdn.sanity.io/images/w8f1ak3c/production/a54b969c847029357a401e2d8ea5d52abd5451d0-2250x1500.jpg/DSC0051_Dexter%20Kim%20copy.jpg?rect=675,0,900,1500&w=1280&h=2133&fit=min&auto=format"
          />
          <ProductCard
            data={gifts}
            name="Gifts for good"
            color="#F5DFCF"
            image="https://cdn.sanity.io/images/w8f1ak3c/production/bc3f529e3f10086db91822f615caf549a260362d-1500x2250.jpg/DSC0083_Dexter%20Kim.jpg?rect=75,0,1350,2250&w=1280&h=2133&fit=min&auto=format"
          />
          <ProductCard
            data={bath}
            name="Bath"
            color="#FFFFFF"
            image="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
          />
        </div>
      </ScrollAnimation>
      <div className="justify-between px-8 py-0 lg:flex lg:px-6">
        <h3 className="lg:text-[56px] md:text-[30px] mt-10 md:leading-9 text-[30px] leading-8 lg:text-left md:text-center text-center lg:max-w-[50%] font-bold lg:leading-[55px]">
          WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.
        </h3>
        <div className=" lg:max-w-[25%] lg:mr-[6.8rem] mt-4 lg:mt-0 lg:text-left md:text-center text-center">
          <p className="mb-[32px]">
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p className="mb-[32px] lg:text-left md:text-center text-center">
            With every purchase you make with us, you're helping to change the
            course of someone's life; you're walking alongside vulnerable women
            as they find their way home again.
          </p>

          <Link to={"/shop"}>
            <div className="flex flex-col w-full text-center lg:text-left md:text-center shoptosupport lg:w-max">
              <p className="shop-text mb-1 text-[12px]">SHOP TO SUPPORT</p>
              <div className="underline-div"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
