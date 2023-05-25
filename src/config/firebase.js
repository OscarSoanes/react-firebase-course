import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAWFAkvtjafmFg0R7V9gogqO-eWFNeXGKE",
  authDomain: "fir-course-bbad9.firebaseapp.com",
  projectId: "fir-course-bbad9",
  storageBucket: "fir-course-bbad9.appspot.com",
  messagingSenderId: "738502510048",
  appId: "1:738502510048:web:ecc56a287e412d04d31785",
  measurementId: "G-02NDJ3MZ90"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);