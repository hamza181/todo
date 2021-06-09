import firebase from 'firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBj9Aq99bYBTt-JMyZx0yuTrmj69d-5_x8",
    authDomain: "note-8fab3.firebaseapp.com",
    databaseURL: "https://note-8fab3.firebaseio.com",
    projectId: "note-8fab3",
    storageBucket: "note-8fab3.appspot.com",
    messagingSenderId: "1036790940257",
    appId: "1:1036790940257:web:b1f34d160c7aba1b4da020",
    measurementId: "G-47ZL974L9E"
  })

  const db = firebaseApp.firestore();

  export {db}