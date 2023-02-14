// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/app";
import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhd4eCaq3GBgtZhufsEtxCTTZm7awIREM",
  authDomain: "react-auth-d421d.firebaseapp.com",
  projectId: "react-auth-d421d",
  storageBucket: "react-auth-d421d.appspot.com",
  messagingSenderId: "107925619582",
  appId: "1:107925619582:web:52702badc61def33e3a92f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth(app);

export const provide = new firebase.auth.GoogleAuthProvider();