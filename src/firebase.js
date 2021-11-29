import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3ddNJPz2_IuG5HcNYA0fik2s6RBYA5vQ",
  authDomain: "clone-e9873.firebaseapp.com",
  projectId: "clone-e9873",
  storageBucket: "clone-e9873.appspot.com",
  messagingSenderId: "45579412961",
  appId: "1:45579412961:web:fcf0076029036ccf509ea0",
  measurementId: "G-40W8S7X4DN",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
