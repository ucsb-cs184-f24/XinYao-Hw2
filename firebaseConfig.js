// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCQLX3DINMVfw9kXNsMKq5T7mznRj5KjKk",
  authDomain: "goldtrackerhw2.firebaseapp.com",
  projectId: "goldtrackerhw2",
  storageBucket: "goldtrackerhw2.appspot.com",
  messagingSenderId: "642377156095",
  appId: "1:642377156095:web:20b1de62d09042c311d3ca",
  measurementId: "G-431T7MJ2PH"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with async storage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firestore
export const db = getFirestore(app);  
