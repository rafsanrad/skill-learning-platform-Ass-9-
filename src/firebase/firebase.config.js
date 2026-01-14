// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUsQ0pJPDXUOEQgmpBB-lK_IHQWnw5xFA",
  authDomain: "skill-learning-platform.firebaseapp.com",
  projectId: "skill-learning-platform",
  storageBucket: "skill-learning-platform.firebasestorage.app",
  messagingSenderId: "288805185426",
  appId: "1:288805185426:web:d7f6a4604186f8c931834b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);