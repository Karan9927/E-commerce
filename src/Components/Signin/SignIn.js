import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  hideSignIn,
  toggleSignIn,
  showSignUp,
  toggleSignUp,
} from "../../features/Slice";
import Signup from "../Signup/Signup";
import ScrollAnimation from "react-animate-on-scroll";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "../../features/Slice";
import { currentUser } from "../../features/Slice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSignUpOpen } = useSelector((state) => state);
  const navigate = useNavigate();
  const handleBackToMenu = () => {
    dispatch(toggleSignIn());
  };

  const signUpForm = () => {
    dispatch(toggleSignUp());
  };
  const signInHandler = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return toast.error("All fields are required !");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      localStorage.setItem("user", JSON.stringify(result));
      dispatch(currentUser(result));
      navigate("/");
      dispatch(toggleSignIn());
      dispatch(toggleSidebar());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isSignUpOpen ? (
        <Signup />
      ) : (
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <div className="flex justify-end w-full">
              <button
                onClick={handleBackToMenu}
                className="text-[14px] py-4 gap-2 flex items-center"
              >
                BACK TO MENU
                <span>
                  <MdKeyboardArrowUp />
                </span>
              </button>
            </div>
            <h3 className="font-bold text-8xl">SIGN IN</h3>
            <form onSubmit={signInHandler} className="flex flex-col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="ENTER EMAIL ADDRESS"
                type="email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="ENTER PASSWORD"
                type="password"
              />
              <div className="flex items-center justify-center gap-5 p-4 my-3 font-bold text-center text-black bg-white border hover:border-white hover:text-white hover:bg-black rounded-3xl">
                <input type="submit" value="Sign in" className="uppercase" />
                <span>
                  <GoArrowRight />
                </span>
              </div>
            </form>
            <p className="text-[12px] text-center my-3">
              NEED AN ACCOUNT?{" "}
              <span
                onClick={signUpForm}
                className="underline cursor-pointer hover:no-underline"
              >
                SIGN UP
              </span>
            </p>
          </div>
        </ScrollAnimation>
      )}
    </>
  );
};

export default SignIn;
