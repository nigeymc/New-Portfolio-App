import * as firebase from 'firebase';

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.default.initializeApp(config);

const database = firebase.default.database();
const firestoreDb = firebase.default.firestore();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default };
export { Axios, firestoreDb }
