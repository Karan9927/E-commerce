import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import { toggleSignUp, toggleSignIn } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const dispatch = useDispatch();
  const { isSignUpOpen } = useSelector((state) => state);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cartItems = useSelector((state) => state.cart);

  const handleBackToMenu = () => {
    dispatch(toggleSignIn());
    dispatch(toggleSignUp());
  };

  const signInForm = () => {
    dispatch(toggleSignIn());
    dispatch(toggleSignUp());
  };
  const signUpHandler = async (event) => {
    event.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return toast.error("All fields are required !");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", users.user);
      const user = {
        name: firstName + lastName,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
        products: cartItems,
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      signInForm();
      toast.success("Signup Successfull");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      console.log(firstName, lastName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isSignUpOpen ? (
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
            <h3 className="font-bold text-8xl">SIGN UP</h3>
            <form onSubmit={signUpHandler} className="flex flex-col">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="FIRST NAME"
                type="name"
              />{" "}
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="LAST NAME"
                type="name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="EMAIL ADDRESS"
                type="email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 my-3 text-black rounded-3xl"
                placeholder="PASSWORD"
                type="password"
              />
              <div className="flex items-center justify-center gap-5 p-4 my-3 font-bold text-center text-black bg-white border cursor-pointer hover:border-white hover:text-white hover:bg-black rounded-3xl">
                <input type="submit" value="Sign up" className="uppercase" />
                <span>
                  <GoArrowRight />
                </span>
              </div>
            </form>
            <p className="text-[12px] text-center my-3">
              ALREADY HAVE AN ACCOUNT?{" "}
              <span
                onClick={signInForm}
                className="underline cursor-pointer hover:no-underline"
              >
                SIGN IN
              </span>
            </p>
          </div>
        </ScrollAnimation>
      ) : (
        ""
      )}
    </>
  );
};

export default Signup;
