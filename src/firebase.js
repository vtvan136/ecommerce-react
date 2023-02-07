import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAfyD-EaK7y_fIIIythmrTwucwFpxrfr60",
  authDomain: "ecommerce-react-2a1a9.firebaseapp.com",
  projectId: "ecommerce-react-2a1a9",
  storageBucket: "ecommerce-react-2a1a9.appspot.com",
  messagingSenderId: "13943101089",
  appId: "1:13943101089:web:e92e3097ae22f1397f02e0"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
