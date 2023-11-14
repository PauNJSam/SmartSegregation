// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXxg-VdsarbrRLKPR2wrO9bu1kVjCCOs",
  authDomain: "smart-segregation.firebaseapp.com",
  projectId: "smart-segregation",
  storageBucket: "smart-segregation.appspot.com",
  messagingSenderId: "252484036368",
  appId: "1:252484036368:web:e56dc974bef24c24586795",
  databaseURL: "https://smart-segregation-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);