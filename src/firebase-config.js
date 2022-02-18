// React
import {useState, useEffect} from 'react';
// Firebase
import { initializeApp } from "firebase/app";
import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD26qgAOS2mmfDa9oModJ8AsI7hWSx0imk",

  authDomain: "test-auth-4bcda.firebaseapp.com",

  projectId: "test-auth-4bcda",

  storageBucket: "test-auth-4bcda.appspot.com",

  messagingSenderId: "473142028984",

  appId: "1:473142028984:web:34c7c9dd683f208bdea24d",

  measurementId: "G-341F3C1R04",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// functions for Auth
export function SignUp (email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password) ;
}

export function logout(){
  return signOut(auth);
}

// custom hook to get the current user:
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  //  run this code only once, when the component is mounted
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub; // to unsubscribe from this hook

  },[])

  return currentUser;
}
