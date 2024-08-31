// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDocs,collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWNzWhgu5sdpY7lyV2KXc4o73dTOZr2Ik",
  authDomain: "sakshamstudies-d4e2c.firebaseapp.com",
  projectId: "sakshamstudies-d4e2c",
  storageBucket: "sakshamstudies-d4e2c.appspot.com",
  messagingSenderId: "919812290404",
  appId: "1:919812290404:web:19aae119ff2b8d337fec71",
  measurementId: "G-X7FV34ZRBC" // Optional, if you are using Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);
const storage = getStorage(app);

// Export the initialized Firestore and Auth instances
export { db, auth, storage,  doc,collection,getDocs };
