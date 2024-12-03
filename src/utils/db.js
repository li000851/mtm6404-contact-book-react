// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMn1YH-qfkznegupksootE5mU_kSH7nGI",
  authDomain: "addressbook-61c75.firebaseapp.com",
  projectId: "addressbook-61c75",
  storageBucket: "addressbook-61c75.firebasestorage.app",
  messagingSenderId: "576414482329",
  appId: "1:576414482329:web:34ae22100d62ad47551d08",
  measurementId: "G-NRW2Y2RD8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;