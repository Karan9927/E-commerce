import React from "react";
import { Parallax } from "react-parallax";
import impact1 from "../../Assets/impact1.webp";
import impact2 from "../../Assets/impact2.webp";
import { Link } from "react-router-dom";

const OurImpact = () => {
  return (
    <div className="flex justify-between px-6 mt-20">
      <div className="w-[270px]">
        <h2 className="text-[24px] font-extrabold mb-[24px]">OUR IMPACT.</h2>
        <p className="mb-[24px]">The thing is, we don't save anyone.</p>
        <p className="mb-[24px]">
          What we do is provide a safe space for women to change the course of
          their own lives.
        </p>
        <p className="mb-[24px]">
          After many years of living in crisis, abuse and complex trauma,
          restoring self-worth is foundational for independence. We believe that
          through experiences that promote love and respect, we can spark and
          nurture a sense of self-worth for those on the path of healing. HERE'S
        </p>
        <div className="flex flex-col w-full text-center cursor-pointer lg:text-left md:text-center shoptosupport lg:w-max">
          <Link to={"/shop"}>
            <p className="shop-text mb-1 text-[12px]">SHOP TO SUPPORT</p>
          </Link>
          <div className="underline-div"></div>
        </div>
      </div>
      <div className="flex gap-5">
        <Parallax
          bgImage={impact1}
          strength={-100}
          bgImageStyle={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <div className="w-[30vw] h-[712px]"></div>
        </Parallax>
        <Parallax
          bgImage={impact2}
          strength={-100}
          bgImageStyle={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <div className="w-[30vw] h-[712px]"></div>
        </Parallax>
      </div>
    </div>
  );
};

export default OurImpact;
