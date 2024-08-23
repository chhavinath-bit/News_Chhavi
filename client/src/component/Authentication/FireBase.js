
import { initializeApp } from "firebase/app";
import { getStorage } from  "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBjwZWd_JM21EWP4sFaetet8pSEi50lwKc",
  authDomain: "newsapp-68b1a.firebaseapp.com",
  projectId: "newsapp-68b1a",
  storageBucket: "newsapp-68b1a.appspot.com",
  messagingSenderId: "717072622622",
  appId: "1:717072622622:web:4c24ba0097a6857bebfa0f",
  measurementId: "G-ZFZ0E3N8KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
