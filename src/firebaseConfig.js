import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDUCGXavLW-VeNDgBztbaRfYNKTpObfgzY",
  authDomain: "where-is-the-fun-news.firebaseapp.com",
  projectId: "where-is-the-fun-news",
  storageBucket: "where-is-the-fun-news.appspot.com",
  messagingSenderId: "190353412945",
  appId: "1:190353412945:web:e1fbb50632fcc528eeb970"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)