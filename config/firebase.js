// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW1MVb58V2BHp36wJ9I7HZtH3dLY5l7io",
  authDomain: "pomodorotimer-5ac19.firebaseapp.com",
  projectId: "pomodorotimer-5ac19",
  storageBucket: "pomodorotimer-5ac19.appspot.com",
  messagingSenderId: "1044571622269",
  appId: "1:1044571622269:web:eebb51621b90717db51a14",
  measurementId: "G-RHPB1BB8FN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
