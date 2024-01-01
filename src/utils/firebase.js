// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcwaIEaM-W5WbxYZd-cd0Et4VMQvY4aPM",
  authDomain: "netflixgpt-41a18.firebaseapp.com",
  projectId: "netflixgpt-41a18",
  storageBucket: "netflixgpt-41a18.appspot.com",
  messagingSenderId: "25014920415",
  appId: "1:25014920415:web:7d6c3a938c6bb482ba756a",
  measurementId: "G-VD4BKN23KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();