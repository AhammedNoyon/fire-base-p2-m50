// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnLWdOoDseak_Q58jBntHVI4XP20FSyWQ",
  authDomain: "fir-part2-cfe4e.firebaseapp.com",
  projectId: "fir-part2-cfe4e",
  storageBucket: "fir-part2-cfe4e.firebasestorage.app",
  messagingSenderId: "830432436641",
  appId: "1:830432436641:web:c51b1d4d1fa00858b4abe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
