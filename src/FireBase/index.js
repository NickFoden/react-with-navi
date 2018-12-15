import firebase from "firebase";
import "firebase/firestore";
let config = {
  apiKey: process.env.REACT_APP_FB_apiKey,
  authDomain: process.env.REACT_APP_FB_authDomain,
  databaseURL: process.env.REACT_APP_FB_databaseURL,
  projectId: process.env.REACT_APP_FB_projectId,
  storageBucket: process.env.REACT_APP_FB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FB_messagingSenderId
};

//Make sure to restart react after setting up the dot env

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

let storage = firebase.storage();
const storageRef = storage.ref();

var user = firebase.auth().currentUser;

let email;

if (user != null) {
  email = user.email;
}

export { auth, email, firebase, firestore, storageRef };

//Using firestore instead of real time db
//Real time woudl be this below for setting up db refs

// const db = firebase.database();
// const ref = firebase.database().ref();
