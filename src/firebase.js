import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnAGY6HZqFBflpSoO4nCkv8FyDOdiUUho",
    authDomain: "instagram-clone-react-f7925.firebaseapp.com",
    projectId: "instagram-clone-react-f7925",
    storageBucket: "instagram-clone-react-f7925.appspot.com",
    messagingSenderId: "773022864755",
    appId: "1:773022864755:web:915b70bf967eed660be106",
    measurementId: "G-WR9QJ876K2"
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db;
