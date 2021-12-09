// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_6kNso0SK3sLJJaeL7QqX4GDOLMkZCx0",
  authDomain: "black-white-club.firebaseapp.com",
  projectId: "black-white-club",
  storageBucket: "black-white-club.appspot.com",
  messagingSenderId: "209237759328",
  appId: "1:209237759328:web:a99aded9c1a1aa05797a05",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);