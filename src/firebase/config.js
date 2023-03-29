import {initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import {  getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBb02oNpEBjzcyxkoNZGvE9NQwxqY_cJzw",
    authDomain: "booklist-prolect.firebaseapp.com",
    projectId: "booklist-prolect",
    storageBucket: "booklist-prolect.appspot.com",
    messagingSenderId: "1086454985709",
    appId: "1:1086454985709:web:9baf426886a0cea48c2de4"
  };


  //init firebase
  initializeApp(firebaseConfig)

  // init firestore
  const db = getFirestore()

  // init firebase auth
  const auth = getAuth()


  export { db, auth }