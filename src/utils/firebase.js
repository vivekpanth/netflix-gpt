// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy32TW6Vs1tySN5_FOd_adHzbD3pFRDMc",
  authDomain: "netflixgpt-f6a1b.firebaseapp.com",
  projectId: "netflixgpt-f6a1b",
  storageBucket: "netflixgpt-f6a1b.appspot.com",
  messagingSenderId: "916861922984",
  appId: "1:916861922984:web:eb0da45211eb01db235c9d",
  measurementId: "G-D25F70Z7PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);