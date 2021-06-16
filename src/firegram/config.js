import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkoC0EodDhCvMd1w8jSB9HPN8yDJvTWS0",
  authDomain: "ruhul-firegram.firebaseapp.com",
  projectId: "ruhul-firegram",
  storageBucket: "ruhul-firegram.appspot.com",
  messagingSenderId: "903744171405",
  appId: "1:903744171405:web:361c185222f1945dfba1c4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
