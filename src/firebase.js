
import { initializeApp } from "firebase/app";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-G8WSArLPTpYfpX017hkMc0XynOvwy_k",
  authDomain: "crud-en-react-2510d.firebaseapp.com",
  projectId: "crud-en-react-2510d",
  databaseURL: "https://crud-en-react-2510d-default-rtdb.firebaseio.com/",
  storageBucket: "crud-en-react-2510d.appspot.com",
  messagingSenderId: "1091166715441",
  appId: "1:1091166715441:web:f1a73695df1084fc235f10"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

//const fire = firebase.initializeApp(firebaseConfig);

export default firebase;