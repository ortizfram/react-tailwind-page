// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWB-edNG_JVKMEpszeiKuVpmzu8EyvHkA",
  authDomain: "yoga-auth.firebaseapp.com",
  projectId: "yoga-auth",
  storageBucket: "yoga-auth.appspot.com",
  messagingSenderId: "979890492425",
  appId: "1:979890492425:web:ac09e2a87be073a15c14d8",
  measurementId: "G-MMQEQMK4L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();