
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXHVfj2eOnkmSAd5xe3ynMSu7I_-uAkuM",
    authDomain: "fir-app-44116.firebaseapp.com",
    projectId: "fir-app-44116",
    storageBucket: "fir-app-44116.appspot.com",
    messagingSenderId: "158669191484",
    appId: "1:158669191484:ios:f7393568939fe259660639"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);