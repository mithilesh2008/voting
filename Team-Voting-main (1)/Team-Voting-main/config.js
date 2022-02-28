import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAvGJMXz0viZ__PqxfLOY06M6ArEz_mfgk",
  authDomain: "pro67-30a70.firebaseapp.com",
  projectId: "pro67-30a70",
  storageBucket: "pro67-30a70.appspot.com",
  messagingSenderId: "391464021660",
  appId: "1:391464021660:web:a823ad23fde796005a4759"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();