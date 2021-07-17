import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCV_KlFvoLdKKzpi9yW01ObvcdQ2QjSu_U",
    authDomain: "quotes-2d2e9.firebaseapp.com",
    projectId: "quotes-2d2e9",
    storageBucket: "quotes-2d2e9.appspot.com",
    messagingSenderId: "133458013605",
    appId: "1:133458013605:web:db03e09b42e48a49154c4c",
    databaseURL: "https://quotes-2d2e9-default-rtdb.europe-west1.firebasedatabase.app/"
}; 

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const databaseRef = database.ref();
export const quotesRef = databaseRef.child("quotes");