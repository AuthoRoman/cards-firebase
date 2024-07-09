// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XGHixkRSZPZKz9P7lo9Z8z0uLKnkU-Y",
  authDomain: "cards-52791.firebaseapp.com",
  projectId: "cards-52791",
  storageBucket: "cards-52791.appspot.com",
  messagingSenderId: "570542097564",
  appId: "1:570542097564:web:2bd6c369b1e09e629a1959",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
