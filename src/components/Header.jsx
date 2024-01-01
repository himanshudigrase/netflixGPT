import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_IMAGE } from '../utils/constants';


const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  /*
    As we only need to sign in user once and logout him once,
    hence we are using useEffect
  */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signs in
        const {uid,email,password,displayName} = user;
        dispatch(addUser({uid:uid, email:email, password: password, displayName: displayName}));
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between'>
        <img className='w-52' src={LOGO}
        alt="logo"/>
      {user && <div className='flex p-4'> 
        <img className='w-12 h-12' src={USER_IMAGE} alt="userLogo" />
        <button className='bg-red-600 text-white rounded-lg p-1 m-1' onClick={() =>{
         
          signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');

          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
        }}>Sign Out</button>
        </div>}  
    </div>
    
  )
}

export default Header