// firebase.js
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain: process.env.YOUR_AUTH_DOMAIN,
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: process.env.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
  appId: process.env.YOUR_APP_ID,
};

let firebaseApp: FirebaseApp;
let firestore: Firestore;

// Check if Firebase is already initialized to avoid duplicates during hot reloads
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

// Initialize Firestore
firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
