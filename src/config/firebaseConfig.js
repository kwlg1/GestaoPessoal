// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { Database } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyALuCPQQwTW61eM5UJ8Q6yKI86Y5K7XmbE",
  authDomain: "jorginproject.firebaseapp.com",
  projectId: "jorginproject",
  storageBucket: "jorginproject.appspot.com",
  messagingSenderId: "152420275426",
  appId: "1:152420275426:web:d250e4f3d74ce5d00d3abb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;