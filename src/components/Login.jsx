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
    console.log(msg);
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
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
          navigate("/");
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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
          navigate("/");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-opacity-75 rounded-lg"
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
