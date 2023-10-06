
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZz3kHvqW9n24Ev-mHeRoMuD9-fQBb_ow",
  authDomain: "vinomania-414e0.firebaseapp.com",
  projectId: "vinomania-414e0",
  storageBucket: "vinomania-414e0.appspot.com",
  messagingSenderId: "953425002285",
  appId: "1:953425002285:web:ef6da3faf0419ad4da9da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore (app)
