// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhBVrzqsAGVvaqiBDpiTK8Prv9WOswILc",
  authDomain: "twogoodco-5b483.firebaseapp.com",
  projectId: "twogoodco-5b483",
  storageBucket: "twogoodco-5b483.appspot.com",
  messagingSenderId: "596007747333",
  appId: "1:596007747333:web:85dc0bb812ed204535016c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
