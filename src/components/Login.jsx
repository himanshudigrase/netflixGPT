import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState();

  const handleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>

      <form className="absolute bg-black text-white w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-opacity-75 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter your name"
        />}
        <input
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter your email address"
        />
        <input
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="password"
          placeholder="Enter your password"
        />
        <button className="bg-red-600 text-white w-full p-4 my-6 rounded-lg">
        {isSignIn? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignIn}>{isSignIn ?"New to Netflix? Sign Up":"Already a user? Sign In here" } </p>
      </form>
    </div>
  );
};

export default Login;
