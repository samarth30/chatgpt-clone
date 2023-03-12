import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCueDZIDQGQWWXKv9Vyozc7R9A7DwOiIJE",
  authDomain: "chatgpt-clone-d08ae.firebaseapp.com",
  projectId: "chatgpt-clone-d08ae",
  storageBucket: "chatgpt-clone-d08ae.appspot.com",
  messagingSenderId: "74619682086",
  appId: "1:74619682086:web:ff356c38b90e336848d5e7",
  measurementId: "G-DJ9HDZVVVN",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
