import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbZhB-uuCpE1TNTgamdWHfDMIhaq00BZg",
    authDomain: "my-scheduling-62f94.firebaseapp.com",
    projectId: "my-scheduling-62f94",
    storageBucket: "my-scheduling-62f94.appspot.com",
    messagingSenderId: "882845291949",
    appId: "1:882845291949:web:bbd1dfeafd3e5952cf7d24"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}

export function signOut(): void {
  firebase.auth().signOut();
}