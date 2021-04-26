 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDrp5fy1ZpTh_OlEQUH2xiBFHBCMA_W1bo",
    authDomain: "first-project---test-project.firebaseapp.com",
    projectId: "first-project---test-project",
    storageBucket: "first-project---test-project.appspot.com",
    messagingSenderId: "1091282909318",
    appId: "1:1091282909318:web:9df3569434ec9892fb3907",
    measurementId: "G-L3C9VSQ3V0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings( { timestampsInSnapshots: true});
  

  export default firebase;