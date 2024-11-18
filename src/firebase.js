// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1e30yW71mICV4ZbvHn7JKaTFe6C8i9g",
  authDomain: "amzon-clone-7f9e2.firebaseapp.com",
  projectId: "amzon-clone-7f9e2",
  storageBucket: "amzon-clone-7f9e2.appspot.com",
  messagingSenderId: "759001279975",
  appId: "1:759001279975:web:84393e6e42a670a364a142",
  measurementId: "G-P0P3H3Y02W",
};

// Initialize Firebase and Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export necessary Firebase functions
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
