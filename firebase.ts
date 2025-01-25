import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTEGHyoWE4mbnVbidkY2MWU-V6ZHsQof4",
    authDomain: "notion-9ae4f.firebaseapp.com",
    projectId: "notion-9ae4f",
    storageBucket: "notion-9ae4f.firebasestorage.app",
    messagingSenderId: "777212702068",
    appId: "1:777212702068:web:e2dc2617dce3cef0a05021",
    measurementId: "G-B6R6YMCTJL"
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db }