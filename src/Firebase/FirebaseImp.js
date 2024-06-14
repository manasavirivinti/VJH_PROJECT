// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL0m5NEppOsUuJINVgbyMJuRiu6ekxgYk",
  authDomain: "ovacare-fbaf9.firebaseapp.com",
  projectId: "ovacare-fbaf9",
  storageBucket: "ovacare-fbaf9.appspot.com",
  messagingSenderId: "715259794668",
  appId: "1:715259794668:web:9d4f73269d46c4531c41c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);