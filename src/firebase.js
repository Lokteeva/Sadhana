import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: `${ process.env.REACT_APP_API_KEY}`,
  authDomain: `${ process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${ process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${ process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${ process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${ process.env.REACT_APP_APPID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//авторизация
export const database = getAuth(app);