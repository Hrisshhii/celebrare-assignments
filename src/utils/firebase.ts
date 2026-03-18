import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2UXc9ZyFLcpy18uoGSsde97hQX9uldK8",
  authDomain: "celebrare-auth.firebaseapp.com",
  projectId: "celebrare-auth",
  storageBucket: "celebrare-auth.firebasestorage.app",
  messagingSenderId: "129591228832",
  appId: "1:129591228832:web:c81f1b9d2c9773ca2fccc5",
  measurementId: "G-BE2LS5C5XF"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();