import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjp6mnUCC3FV9WYi91a0tkEgva7JtzvPs",
  authDomain: "wegrow-9c696.firebaseapp.com",
  projectId: "wegrow-9c696",
  storageBucket: "wegrow-9c696.appspot.com",
  messagingSenderId: "508506927120",
  appId: "1:508506927120:web:7b825c6c8fb5cbd01c1a95",
  measurementId: "G-LPQ9MWK14K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
