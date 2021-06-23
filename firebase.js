import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbWnkPS3DQM95pISIakR0-hyh9OIOPfKU",
  authDomain: "facebook-clone-5c3bf.firebaseapp.com",
  projectId: "facebook-clone-5c3bf",
  storageBucket: "facebook-clone-5c3bf.appspot.com",
  messagingSenderId: "762014436950",
  appId: "1:762014436950:web:288d7badc0a085de1775f7",
  measurementId: "G-PLP72BZY2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

