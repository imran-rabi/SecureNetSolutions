// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5IrSHVeS9Pv03F2QkjYzJszMwrQk9JFk",
  authDomain: "login-system-55533.firebaseapp.com",
  projectId: "login-system-55533",
  storageBucket: "login-system-55533.appspot.com",
  messagingSenderId: "911668592487",
  appId: "1:911668592487:web:1fe33b9f7a62877171b9c2",
  measurementId: "G-TBXHM1ZGJ6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
