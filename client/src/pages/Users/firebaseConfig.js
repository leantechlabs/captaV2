// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCaIligx6NghVCjOOpVsTbgAxMqEBvLtc",
  authDomain: "lantech-lab-files.firebaseapp.com",
  projectId: "lantech-lab-files",
  storageBucket: "lantech-lab-files.appspot.com",
  messagingSenderId: "723089316242",
  appId: "1:723089316242:web:5b286b9ae17f8bcb8c094b",
  measurementId: "G-QCHKW1TKMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage=getStorage(app);