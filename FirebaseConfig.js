import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC_VP5qaFWBGWrkD-QgKfSV_ReTHkIpfQM",
  authDomain: "nordic-cf4f9.firebaseapp.com",
  projectId: "nordic-cf4f9",
  storageBucket: "nordic-cf4f9.appspot.com",
  messagingSenderId: "415158815697",
  appId: "1:415158815697:web:4dc4b5bfecfcd035562ef0",
  measurementId: "G-ZEFPEVNZYP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const appauth = getAuth(app);
export const app_db = getFirestore(app);

