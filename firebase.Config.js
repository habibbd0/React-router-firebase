// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4k5X5CqRYDU6k_8VvDG0ul_R5P0-JD48",
  authDomain: "first-usecase-firebase.firebaseapp.com",
  projectId: "first-usecase-firebase",
  storageBucket: "first-usecase-firebase.appspot.com",
  messagingSenderId: "567962010079",
  appId: "1:567962010079:web:32268c9ea2f2c08331846a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;