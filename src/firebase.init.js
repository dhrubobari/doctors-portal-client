// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXGKrd9eGgNj8U-NgeqhjkE4VvnMAkrqI",
  authDomain: "doctors-portal-f8e1d.firebaseapp.com",
  projectId: "doctors-portal-f8e1d",
  storageBucket: "doctors-portal-f8e1d.appspot.com",
  messagingSenderId: "494116384553",
  appId: "1:494116384553:web:df9d338155787e8f309138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;