// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-AT13iPbJu1e8g_lrWAxHKr8myYqCFg4",
  authDomain: "swproject-firebase.firebaseapp.com",
  projectId: "swproject-firebase",
  storageBucket: "swproject-firebase.appspot.com",
  messagingSenderId: "896476872155",
  appId: "1:896476872155:web:557c286a45bbb68f737bfe",
  measurementId: "G-K5KYE81XTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);