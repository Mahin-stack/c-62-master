 import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyDM5GB2-U9pf45F8XS3uSv4HpwnA7bhnXg",
    authDomain: "school-app-54d0c.firebaseapp.com",
    databaseURL: "https://school-app-54d0c.firebaseio.com",
    projectId: "school-app-54d0c",
    storageBucket: "school-app-54d0c.appspot.com",
    messagingSenderId: "720734761700",
    appId: "1:720734761700:web:3bdc0f8abfc4243e09f2f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();