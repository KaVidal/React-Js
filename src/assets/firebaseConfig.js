// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3wR68FiX_wFuy6aF2tKIHK3XnQsBTlhM",
  authDomain: "veganndy-84be4.firebaseapp.com",
  projectId: "veganndy-84be4",
  storageBucket: "veganndy-84be4.appspot.com",
  messagingSenderId: "874530770169",
  appId: "1:874530770169:web:8452c2641d07488faca628",
  measurementId: "G-8BM7FJM2XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;