// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNKuraUjr6Luf3qYXrDUbk9Ge97w15WMc",
  authDomain: "netflixbuy-62286.firebaseapp.com",
  projectId: "netflixbuy-62286",
  storageBucket: "netflixbuy-62286.appspot.com",
  messagingSenderId: "540446495245",
  appId: "1:540446495245:web:e57946e30a4933105cbb44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
