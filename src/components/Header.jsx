import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_IMAGE } from "../utils/constants";
import { toggleSearch } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  /*
    As we only need to sign in user once and logout him once,
    hence we are using useEffect
  */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signs in
        const { uid, email, password, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  };
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50  flex flex-col md:flex-row justify-between">
      <img className="w-52 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">

          <div>
            <select className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang =>(
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => dispatch(toggleSearch())}>
            <img className="w-10 mr-4" src="/search.png" />
          </button>
          <img className="hidden md:block w-12 h-12" src={USER_IMAGE} alt="userLogo" />
          <button
            className="bg-red-600 text-white rounded-lg -py-4 ml-2"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                  navigate("/");
                })
                .catch((error) => {
                  // An error happened.
                  navigate("/error");
                });
            }}
          >Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
