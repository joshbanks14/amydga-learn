import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTN1TFCNG7gCi0D0bsgVMKSUwNcjpNO4g",
  authDomain: "amygdalearn.firebaseapp.com",
  projectId: "amygdalearn",
  storageBucket: "amygdalearn.appspot.com",
  messagingSenderId: "1096932398048",
  appId: "1:1096932398048:web:06f1c1f675b69a1f489185",
  measurementId: "G-GCJS7LEH3R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
