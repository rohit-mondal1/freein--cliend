// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxFOZZ0sU0gL_urCD6alyztTmWv9uxUUo",
  authDomain: "freein-r.firebaseapp.com",
  projectId: "freein-r",
  storageBucket: "freein-r.appspot.com",
  messagingSenderId: "876967889907",
  appId: "1:876967889907:web:2c6e7723344e5777782086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;