import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsX60tTpl4EWwGaL3dueA1x-JvY1D-h_U",
  authDomain: "ecommerce-react-ec043.firebaseapp.com",
  projectId: "ecommerce-react-ec043",
  storageBucket: "ecommerce-react-ec043.appspot.com",
  messagingSenderId: "594501446621",
  appId: "1:594501446621:web:35641a4c1b1eff6bf52434"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
