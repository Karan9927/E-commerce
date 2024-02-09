import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

const ProductCard = ({ name, image, color, data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const background = {
    backgroundColor: color,
  };

  return (
    <div key={data.id} id="product-div" className="overflow-hidden h-[700px]">
      <Parallax
        bgImage={image}
        strength={-150}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <div style={{ width: "31vw", height: "793px", position: "relative" }}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`absolute top-20 left-3 lg:top-[35%] lg:left-[15%] md:top-[40%] md:left-[90%] p-4 lg:px-6 px-4 w-[303px] rounded-3xl transition-height duration-300 ${
              isHovered ? "h-[250px]" : "h-[50px]"
            }`}
          >
            <Link to={"/shop"}>
              <div
                className={`relative p-4 lg:px-6 px-4 w-[303px] rounded-3xl transition-height duration-300 ${
                  isHovered ? "h-[250px]" : "h-[50px]"
                }`}
                style={background}
              >
                <div className="flex items-center justify-between text-xs uppercase">
                  <p className="text-[8px]">
                    <FaCircle />
                  </p>
                  <p className="">Shop</p>
                  <p className="font-bold">{name}</p>
                  <p>
                    <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </Link>

            <div className="absolute items-end hidden gap-2 mt-5 lg:flex md:hidden top-9 left-10">
              {data.map((product) => (
                <Link to={`shop/${product.id}`}>
                  <div
                    key={product.id}
                    className={`flex flex-col items-center justify-end text-center transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      className="w-[100%]"
                      src={product.img_url}
                      alt={product.name}
                      style={{ transitionDelay: isHovered ? "0.3s" : "0s" }}
                    />
                    <p className="uppercase text-[11px] font-semibold">
                      {product.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ProductCard;
