import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBia8kxa6_hQ8BFyCL6tLj55vpkl8XLM88',
  authDomain: 'crwn-db-65777.firebaseapp.com',
  projectId: 'crwn-db-65777',
  storageBucket: 'crwn-db-65777.appspot.com',
  messagingSenderId: '908395155199',
  appId: '1:908395155199:web:385d6ca1456d4d6cf746ca',
  measurementId: 'G-0KK1WKVL5D',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
