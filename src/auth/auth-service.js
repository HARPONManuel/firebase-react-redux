import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from "./config";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Helper method for initial load of site
// Firebase takes a second to determine currentUser object
// So we can use local storage for initial UI purposes
const getAuthenticationStatus = () => {
  return localStorage.getItem("isAuthenticated");
};

export { auth, getAuthenticationStatus };
