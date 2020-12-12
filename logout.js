// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB7wqM0fRBfWwx_Khtp1wEjcraS_C7ZO4c",
    authDomain: "old-age-chat-app.firebaseapp.com",
    databaseURL: "https://old-age-chat-app.firebaseio.com",
    projectId: "old-age-chat-app",
    storageBucket: "old-age-chat-app.appspot.com",
    messagingSenderId: "652643126078",
    appId: "1:652643126078:web:5537a71b812db9ea2b3a6f",
    measurementId: "G-5ZTRDYC90E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Making a reference of firebase authentication for sign in
  const auth = firebase.auth();

function logout() {
  firebase.auth().signOut().then(function() {
    alert("User Signed Out");
    window.location = "register.html";
  }).catch(function(error) {
    alert(error);
  });
   
}

function homepage() {
  window.location = "homepage.html"
  speechSynthesis.speak(new SpeechSynthesisUtterance("Hi "+localStorage.getItem("Username")+" How can I help you ?"));
}

