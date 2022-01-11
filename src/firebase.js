import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk_d8EhO_RzM7Bo4dqf-v4GWnMjKle3hQ",
  authDomain: "challenge-d4dcb.firebaseapp.com",
  projectId: "challenge-d4dcb",
  storageBucket: "challenge-d4dcb.appspot.com",
  messagingSenderId: "129291153041",
  appId: "1:129291153041:web:a5dab4bfe2a7ca73699930",
  measurementId: "G-3S17VQQMCY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };
