import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
  apiKey: "AIzaSyAmjtwJhPPoQjHg-o_EjC-aiSCtmGzJtzQ",
  authDomain: "movie-list-3d942.firebaseapp.com",
  databaseURL: "https://movie-list-3d942.firebaseio.com",
  projectId: "movie-list-3d942",
  storageBucket: "movie-list-3d942.appspot.com",
  messagingSenderId: "1080619382778",
  appId: "1:1080619382778:web:76dafc6c33618e08ba5643",
  measurementId: "G-LQSSR2GBPF"
};
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings(settings);
// firebase.analytics();
const db = firebase.firestore();
/* const firebaseApp = firebase.initializeApp(firebaseConfig).firestore();
const db = firebaseApp.firestore(); */
/*  
gore: import firebase from 'firebase'
dole:
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();
*/
export { db };