// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDexs4OjXxXP7oZtKlWOt5zbJXzT3R8cw8",
     authDomain: "mapi-cpc.firebaseapp.com",
     projectId: "mapi-cpc",
     storageBucket: "mapi-cpc.firebasestorage.app",
     messagingSenderId: "962131236776",
     appId: "1:962131236776:web:25b4f0c0a1ea6af430ef9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
