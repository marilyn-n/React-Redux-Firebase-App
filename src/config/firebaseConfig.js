import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBBQ2a727oafUGyl7ZoVj6ACCptoqdV8EM",
  authDomain: "react-app-project-builder.firebaseapp.com",
  databaseURL: "https://react-app-project-builder.firebaseio.com",
  projectId: "react-app-project-builder",
  storageBucket: "",
  messagingSenderId: "730117373063",
  appId: "1:730117373063:web:07b24bac48bb761b540c22"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;