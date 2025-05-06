
// firebase.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDa6QNlzxW3iIS1Hg3PJXDKV9b0wzN6svM",
  authDomain: "invitation-8a9c8.firebaseapp.com",
  projectId: "invitation-8a9c8",
  storageBucket: "invitation-8a9c8.firebasestorage.app",
  messagingSenderId: "889987340560",
  appId: "1:889987340560:web:d6308524543bea5dfa6d95",
};

// YOUR_API_KEY="AIzaSyDa6QNlzxW3iIS1Hg3PJXDKV9b0wzN6svM"
// YOUR_AUTH_DOMAIN="invitation-8a9c8.firebaseapp.com"
// YOUR_PROJECT_ID="invitation-8a9c8"
// YOUR_STORAGE_BUCKET="invitation-8a9c8.firebasestorage.app"
// YOUR_MESSAGING_SENDER_ID="889987340560"
// YOUR_APP_ID="1:889987340560:web:d6308524543bea5dfa6d95"

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // if already initialized, use that one
}

const db = getFirestore(app);

export { db, firebaseConfig };

