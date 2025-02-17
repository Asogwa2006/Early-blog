// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFxSJMGhcq-tyYwwms7PzdOtdd0z-PCU8",
  authDomain: "early-blog-66272.firebaseapp.com",
  projectId: "early-blog-66272",
  storageBucket: "early-blog-66272.firebasestorage.app",
  messagingSenderId: "896819522980",
  appId: "1:896819522980:web:766ecf537bcecd338b6531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}