import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrQ5c3L2w3DJEKvjcMPGvntFzsR7jgZzo",
  authDomain: "journalapp-f5649.firebaseapp.com",
  projectId: "journalapp-f5649",
  storageBucket: "journalapp-f5649.appspot.com",
  messagingSenderId: "75258793449",
  appId: "1:75258793449:web:dc0e629d15bf9085d5cf78"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}