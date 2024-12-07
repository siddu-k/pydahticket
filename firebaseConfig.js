// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUYkptzOR6CigaN38SeFislLsLltTsqM0",
  authDomain: "pydahticket.firebaseapp.com",
  projectId: "pydahticket",
  storageBucket: "pydahticket.firebasestorage.app",
  messagingSenderId: "14405900912",
  appId: "1:14405900912:web:1ecc1781a298d461eab2b5",
  measurementId: "G-KMCC4KG3JK",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
