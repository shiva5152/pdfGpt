// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADAKEmE7s9-YQ_Bfr6CY4pQzK3frTeesw",
    authDomain: "pdf-chat-73260.firebaseapp.com",
    projectId: "pdf-chat-73260",
    storageBucket: "pdf-chat-73260.appspot.com",
    messagingSenderId: "357102730663",
    appId: "1:357102730663:web:eaf8bf20d39fe177deca82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);