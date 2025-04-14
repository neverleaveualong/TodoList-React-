// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-task-cc053.firebaseapp.com",
  projectId: "react-task-cc053",
  storageBucket: "react-task-cc053.firebasestorage.app",
  messagingSenderId: "378119037883",
  appId: "1:378119037883:web:1c51f4909c148d1db99a9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
