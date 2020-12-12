//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB7wqM0fRBfWwx_Khtp1wEjcraS_C7ZO4c",
    authDomain: "old-age-chat-app.firebaseapp.com",
    databaseURL: "https://old-age-chat-app.firebaseio.com",
    projectId: "old-age-chat-app",
    storageBucket: "old-age-chat-app.appspot.com",
    messagingSenderId: "652643126078",
    appId: "1:652643126078:web:5537a71b812db9ea2b3a6f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// ------------------------------------------------------------------------------------------------------------------

roomname = localStorage.getItem("roomname");

no_of_h4 = 0;

function back() {
    window.location = "chat_with_friends_start.html";
    localStorage.removeItem("roomname");
  }

  function sendmessage() {
    console.log(roomname);
    if (document.getElementById("msg").value != "") {
          var msg = document.getElementById("msg").value;
          console.log(msg);
          document.getElementById("listviewer").innerHTML += "<br>" + "<label onclick = 'removebill(this.id)' id='bill'>" + msg +"</label>";
          firebase.database().ref(roomname).push({
            message : localStorage.getItem("Username")+" : "+ msg
          });
          document.getElementById("msg").value= "";
        }
  }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("listviewer").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

message = message_data['message'];

name_with_tag = "<h4 id='msg"+ no_of_h4 +"'>"+message+""+"</h4>";

document.getElementById("listviewer").innerHTML += name_with_tag;

str1 = message;
splited = str1.split(" : ")[0];

if (splited == localStorage.getItem("Username")) {
   console.log("matched !");
   document.getElementById("msg"+ no_of_h4 +"").style.textAlign = "right";
   document.getElementById("msg"+ no_of_h4 +"").style.marginRight = "15px";
} else {
  console.log("Not matched !");
  document.getElementById("msg"+ no_of_h4 +"").style.textAlign = "left";
  document.getElementById("msg"+ no_of_h4 +"").style.marginLeft = "15px";
}
no_of_h4 = no_of_h4 + 1;
console.log(no_of_h4);
//End code
} });  }); }
getData();







        

