import React from "react";
import Slider from "./Slider";
import Message from "../Message/Message";

const Testomonials = () => {
  return (
    <div className="my-6">
      <div className="flex justify-between mx-4 text-xs border-b border-black lg:mx-6">
        <p>WORDS OF GOODNESS</p>
        <p>MESSAGES OF LOVE & SUPPORT</p>
      </div>
      <Slider />
      <Message />
    </div>
  );
};

export default Testomonials;
