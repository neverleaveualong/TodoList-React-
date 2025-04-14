// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-app-test-d9120.firebaseapp.com",
  projectId: "react-app-test-d9120",
  storageBucket: "react-app-test-d9120.firebasestorage.app",
  messagingSenderId: "921569245924",
  appId: "1:921569245924:web:3d1048e13fffc3e7cbcaf1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
