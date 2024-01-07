import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = () => {
    const msg = checkValidData(email.current.value, password.current.value);
   
    if (msg) return;

    // Sign Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Hims",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
    // Sign In
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="h-screen object-cover"
          src={BG_IMAGE}
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-10/12 absolute bg-black text-white md:w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-opacity-75 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="w-full p-4 my-4 bg-gray-700 rounded-lg"
            type="text"
            placeholder="Enter your name"
          />
        )}
        <input
          ref={email}
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter your email address"
        />
        <input
          ref={password}
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={handleLogin}
          className="bg-red-600 text-white w-full p-4 my-6 rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already a user? Sign In here"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
