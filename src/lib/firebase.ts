// Firebase configuration for Rhythm PreSchool
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCh6qpDfdV8ee8EO5XBDBA8CKckQ501AP8",
  authDomain: "zapster-3acbd.firebaseapp.com",
  projectId: "zapster-3acbd",
  storageBucket: "zapster-3acbd.firebasestorage.app",
  messagingSenderId: "920516043110",
  appId: "1:920516043110:web:9ecfd4a716576956f068a7",
  measurementId: "G-849H0VF142"
};

// Prevent re-initializing on hot reload
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
