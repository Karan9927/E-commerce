import React, { useState } from "react";

const Message = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSend = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="flex flex-col items-center justify-center duration-300">
      {submitted ? (
        <button
          type="submit"
          className="p-5 text-sm font-semibold text-white duration-300 bg-black border-none px-28 hover:text-gray-300 rounded-3xl"
        >
          THANK YOU !
        </button>
      ) : (
        <form
          onSubmit={handleSend}
          className="flex flex-col w-[340px] transition-all duration-300"
        >
          <div className="bg-black p-[24px] rounded-tr-3xl rounded-tl-3xl">
            <div>
              <div className="flex flex-col mb-6">
                <label className="mb-2 text-xs font-semibold text-white ">
                  NAME
                </label>
                <input
                  required
                  className="mb-2 text-sm text-gray-400 bg-transparent focus:outline-none"
                  type="text"
                  placeholder="James M"
                />
              </div>

              <div className="flex flex-col mb-6">
                <label className="flex justify-between mb-2 text-xs text-white">
                  <p>MESSAGE</p>
                  <p>80 CHARACTERS MAX</p>
                </label>
                <textarea
                  required
                  className="flex flex-1 mb-2 text-sm text-gray-400 bg-transparent focus:outline-none "
                  maxLength={80}
                  rows={"5"}
                  type="text"
                  placeholder="With every purchase, you have the potential to change the course of a woman's life. We're changing the course of every homeless woman's for good by selling meals and handcrafted products."
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="p-5 text-sm font-semibold text-white duration-300 bg-gray-700 border-none hover:text-gray-300 rounded-br-3xl rounded-bl-3xl"
          >
            SEND YOUR OWN MESSAGE
          </button>
        </form>
      )}

      <p className="my-5 ">
        Sometimes it’s the smallest actions <br /> that can make the biggest
        impact.
      </p>
    </div>
  );
};

export default Message;
