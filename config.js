import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDIoAK18Iva2rB4dq1nkXsPy3Hq8irT414",
  authDomain: "pokemon-1572e.firebaseapp.com",
  databaseURL: "https://pokemon-1572e.firebaseio.com",
  projectId: "pokemon-1572e",
  storageBucket: "pokemon-1572e.appspot.com",
  messagingSenderId: "124174774591",
  appId: "1:124174774591:web:712cb2f3ad051eac86238a",
  measurementId: "G-HQ63JMG4CS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
