import React, { useEffect } from "react";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  const dispatch = useDispatch();

  // As we only need to sign in user once and logout him once,
  // hence we are using useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signs in
        const {uid,email,password,displayName} = user;
        dispatch(addUser({uid:uid, email:email, password: password, displayName: displayName}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
