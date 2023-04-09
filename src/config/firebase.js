// Importo las funcionas que necesito del sdk que necesito.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC0b8ag70HbnWrAnD8HsMPiCfYpm41kAt0",
  authDomain: "portfolio-45990.firebaseapp.com",
  projectId: "portfolio-45990",
  storageBucket: "portfolio-45990.appspot.com",
  messagingSenderId: "958116131553",
  appId: "1:958116131553:web:03c48fabff9daa6592bda0",
  measurementId: "G-W89DSVWLK0"
};

// Initializo Firebase
const app = initializeApp(firebaseConfig);
export const FireDB = getFirestore(app);
export const Auth = getAuth(app);
export const Storage = getStorage(app);