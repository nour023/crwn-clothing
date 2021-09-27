import firebase from 'firebase/app' 
import 'firebase/firestore'
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDZdbrTkH6kCKAu_dO805o5hIHKq_SMMjQ",
    authDomain: "crwn-clothing-bec56.firebaseapp.com",
    projectId: "crwn-clothing-bec56",
    storageBucket: "crwn-clothing-bec56.appspot.com",
    messagingSenderId: "225028205791",
    appId: "1:225028205791:web:ac2497f18a29609e68cd6a",
    measurementId: "G-D8EJVKYEG5"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt:'select_account'})
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;