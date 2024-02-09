import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import twogoodlogo from "../../Assets/toogoodlogo.png";
import ScrollAnimation from "react-animate-on-scroll";
const Footer = () => {
  const [success, setSuccess] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <footer className="w-full px-6">
      <div>
        <form
          onSubmit={submitHandler}
          className="flex justify-between border-b border-black"
        >
          <input
            type="text"
            required
            placeholder="Enter your email address for good"
            className="w-[90vw] text-[40px] uppercase font-bold focus:outline-none "
          />
          <button
            className="text-[36px] hover:scale-125 duration-300"
            type="submit"
          >
            <IoIosArrowRoundForward />
          </button>
        </form>
        {success ? (
          <div className="m-5 text-[20px] text-center text-green-500">
            <p>You're on the list; watch out for our next Twosday Update!</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="h-screen">
        <div className="flex items-start justify-between pt-32">
          <div>
            <h4 className="text-[12px] text-gray-400 mt-2 mb-3 ">
              CONNECT WITH US
            </h4>
            <ul className="text-[14px] font-semibold text-gray-800">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <img alt="footer-logo" className="w-[80%]" src={twogoodlogo} />
              </div>
              <div className="my-12 ">
                <ul className="flex text-[12px] text-gray-400 gap-10">
                  <li>© TWO GOOD CO. 2024</li>
                  <li>TERMS OF USE</li>
                  <li>PRIVACY POLICY</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
          <div>
            <h4 className="text-[12px] text-gray-400 mt-2 mb-3">
              THE NITTT GRITTIES
            </h4>
            <ul className="text-[14px] font-semibold text-gray-800">
              <li>Good Things FAQs</li>
              <li>Good Food FAQs</li>
              <li>Good Places</li>
              <li>Pathways</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[14px] text-center w-[50%] my-[64px]">
            We are proud and privileged to have our home on this land, and to be
            able to continue the long tradition of community coming together
            around food, begun thousands of years ago by First Nations peoples.
            As we stand together on this unceded land, we acknowledge our First
            Nations people, are the original custodians of this land, and we
            recognise their deep connection to land, water, sky and community
            which continues today. We pay our deep respects to community elders,
            past, present and emerging, for they hold the memories, the
            traditions, the culture and hopes of Aboriginal and Torres Strait
            Islander peoples. Always was, always will be Aboriginal land.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
