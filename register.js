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

//to check the internet connection
setInterval(function(){
  function isOnline() { 
    console.log(navigator.onLine);
    if (navigator.onLine == false) {
      alert("Please Check Your Internet Connection...");
    }
  }
  isOnline();
} , 1000)

// Sign Up function
function SignUp() {
     if (document.getElementById("username").value != "") {
       email = document.getElementById("email").value;
       password = document.getElementById("password").value;
       username = document.getElementById("username").value;
       localStorage.setItem("Username" , username);

       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((user) => {
         // Signed in 
         // ...
         alert("User Signed Up");
         window.location = "logout.html";
         utterance = new SpeechSynthesisUtterance("WELCOME !")
         utterance.rate = 1;
         speechSynthesis.speak(utterance);  
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          alert(error);
        });
      } else {
        alert("Error: Please enter the username..");
      }
  }

// Sign In function
function SignIn() {
  if (document.getElementById("username").value != "") {
     email = document.getElementById("email").value;
     password = document.getElementById("password").value;
     username = document.getElementById("username").value;
     localStorage.setItem("Username" , username);

     firebase.auth().signInWithEmailAndPassword(email, password)
     .then((user) => {
       // Signed in 
       // ...
       alert("User Signed In");
       window.location= "logout.html";
       utterance = new SpeechSynthesisUtterance("WELCOME !")
       utterance.rate = 1;
       speechSynthesis.speak(utterance);  
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(error);
     });
  } else {
    alert("Error: Please enter the username..");
  }
}