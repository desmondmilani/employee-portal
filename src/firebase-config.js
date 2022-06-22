import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
 


const firebaseConfig = {
    apiKey: "AIzaSyBuGhkbJ6uniDAhg6CmvTCJ0l43acP2BeQ",
    authDomain: "employee-portal-32b30.firebaseapp.com",
    projectId: "employee-portal-32b30",
    storageBucket: "employee-portal-32b30.appspot.com",
    messagingSenderId: "359484202504",
    appId: "1:359484202504:web:e7a3e6bc82c796ca2a3bbd",
    measurementId: "G-7B0WR18DWN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);