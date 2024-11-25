// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqxPAS7lxCjvMLF5SEKCGe7SNtJ_MxXJ0",
  authDomain: "my-portfolio-82e60.firebaseapp.com",
  projectId: "my-portfolio-82e60",
  storageBucket: "my-portfolio-82e60.firebasestorage.app",
  messagingSenderId: "1072480221681",
  appId: "1:1072480221681:web:afdaba2aee66d482f76c50",
  measurementId: "G-KB963PMCLC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
