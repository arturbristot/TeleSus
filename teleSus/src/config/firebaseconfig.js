// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5hmHXtKrUndGJlR4XeLjHc_3dX9z7ogk",
  authDomain: "telesus-86fe3.firebaseapp.com",
  projectId: "telesus-86fe3",
  storageBucket: "telesus-86fe3.appspot.com",
  messagingSenderId: "828089327175",
  appId: "1:828089327175:web:35e720898e189826599b62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const auth = getAuth(app);

export {
  database,
  collection,
  doc,
  deleteDoc,
  addDoc,
  auth,
  onAuthStateChanged,
  updateDoc,
};
