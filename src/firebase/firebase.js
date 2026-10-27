import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGCOACn8wr7ZEUg8EJBBNqhcSUXHsQpAU",
  authDomain: "wedding-invitation-new.firebaseapp.com",
  projectId: "wedding-invitation-new",
  storageBucket: "wedding-invitation-new.firebasestorage.app",
  messagingSenderId: "541811848511",
  appId: "1:541811848511:web:9d52d3e6244f8890968f8a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
