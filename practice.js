
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBzveC3cJ2J4v-7-tQY_2MOw8EXyY-_uBU",
    authDomain: "kwitter-47a8c.firebaseapp.com",
    databaseURL: "https://kwitter-47a8c-default-rtdb.firebaseio.com",
    projectId: "kwitter-47a8c",
    storageBucket: "kwitter-47a8c.appspot.com",
    messagingSenderId: "285993455876",
    appId: "1:285993455876:web:e2b6e55e0c1df466760051"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
      });
  }