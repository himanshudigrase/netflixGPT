import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between'>
        <img className='w-52' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"/>
      {user && <div className='flex p-4'> 
        <img className='w-12 h-12' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="userLogo" />
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