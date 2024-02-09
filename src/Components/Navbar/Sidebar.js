import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toggleSidebar, toggleSignIn, currentUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../Signin/SignIn";

const Sidebar = ({ isOpen }) => {
  const [isDown, setIsDown] = useState(false);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const { isSignInOpen } = useSelector((state) => state);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  const signOutHandler = () => {
    dispatch(currentUser(""));
    localStorage.clear();
    dispatch(toggleSidebar());
  };
  const toggleForm = () => {
    dispatch(toggleSignIn());
  };

  useEffect(() => {
    if (isOpen) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
    const tl = gsap.timeline();
    tl.from(textRef1.current, {
      y: 300,
      opacity: 0,
      duration: 0.4,
    })
      .from(textRef2.current, {
        y: 200,
        opacity: 0,
        duration: 0.4,
      })
      .from(textRef3.current, {
        y: 100,
        opacity: 0,
        duration: 0.4,
      });
  }, [isOpen]);

  return (
    <>
      <div
        className={`absolute z-10 w-full h-screen mt-[-132px] bg-black text-white duration-300 transition-transform ${
          isDown
            ? "-translate-y-0 duration-300"
            : "-translate-y-full duration-300"
        }`}
      >
        <div className="flex items-end justify-between h-full">
          <div className="flex gap-56 px-6 pb-10">
            <div>
              <h4 className="text-[12px] text-gray-400 font-semibold mb-5 ">
                CONNECT WITH US
              </h4>
              <ul className="text-[14px] font-semibold text-white">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] text-gray-400 font-semibold mb-5">
                THE NITTT GRITTIES
              </h4>
              <ul className="text-[14px] font-semibold text-white">
                <li>Good Things FAQs</li>
                <li>Good Food FAQs</li>
                <li>Good Places</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] text-gray-400 font-semibold mb-5">
                GET STARTED
              </h4>
              <ul className="text-[14px] font-semibold text-white">
                <li>Pathways</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="px-6 py-6 text-white">
            {isSignInOpen ? (
              <SignIn />
            ) : (
              <ul className="sidebar-nav text-[56px] text-right leading-none ">
                <li className="overflow-hidden cursor-pointer">
                  <Link to={"/shop"}>
                    <p
                      onClick={toggleSidebarHandler}
                      className=" font-[futura]"
                      ref={textRef1}
                    >
                      SHOP
                    </p>
                  </Link>
                </li>
                <li>
                  {user?.user?.email === "karan@gmail.com" ? (
                    <Link to={"/Admin"}>
                      <p className="font-[futura]">ADMIN</p>
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li className="overflow-hidden cursor-pointer">
                  {user?.user?.email !== "karan@gmail.com" ? (
                    <Link to={"/Orders"}>
                      <p ref={textRef2} className="font-[futura] uppercase">
                        Orders
                      </p>
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                {/* <li className="overflow-hidden cursor-pointer">
                <Link to={"/about"}>
                  <p
                    onClick={toggleSidebarHandler}
                    className=" font-[futura]"
                    ref={textRef2}
                  >
                    ABOUT
                  </p>
                </Link>
              </li> */}
                {user && Object.keys(user).length !== 0 ? (
                  <li className="overflow-hidden cursor-pointer">
                    <p
                      onClick={signOutHandler}
                      className=" font-[futura]"
                      ref={textRef3}
                    >
                      SIGN OUT
                    </p>
                  </li>
                ) : (
                  <li className="overflow-hidden cursor-pointer">
                    <p
                      onClick={toggleForm}
                      className=" font-[futura]"
                      ref={textRef3}
                    >
                      SIGN IN
                    </p>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
