// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUukVtWqAH1aEBv-xKzVhkTaO15E43vPE',
  authDomain: 'lazy-pizza-973c7.firebaseapp.com',
  projectId: 'lazy-pizza-973c7',
  storageBucket: 'lazy-pizza-973c7.appspot.com',
  messagingSenderId: '245468448246',
  appId: '1:245468448246:web:b4c65a42acbbabcd4b33d7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = initializeAuth(app);

// Use auth for additional Firebase Auth features, e.g., signInWithEmailAndPassword
export const authInstance = getAuth();


