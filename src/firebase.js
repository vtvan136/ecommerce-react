import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDX5csRrzwbVTQ1tSoTeoTDotS-slGKTg",
  authDomain: "ecommerce-react-68857.firebaseapp.com",
  projectId: "ecommerce-react-68857",
  storageBucket: "ecommerce-react-68857.appspot.com",
  messagingSenderId: "380941395541",
  appId: "1:380941395541:web:5e86abf72b9e31671b96dc"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
