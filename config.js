import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAS5n-_SvRXWaLJpWhlihIwApy-8Lg4Ph4",
    authDomain: "c71-project-8c169.firebaseapp.com",
    projectId: "c71-project-8c169",
    storageBucket: "c71-project-8c169.appspot.com",
    messagingSenderId: "4636544778",
    appId: "1:4636544778:web:63f9bebfbcd779eac074f3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
