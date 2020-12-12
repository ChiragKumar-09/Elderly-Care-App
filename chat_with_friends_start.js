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

var roomname = "";
var roomtype = "";

function back() {
    window.location = "homepage.html";
}

function defaultroom() {
    document.getElementById("buttonback").style.display = "none";
    document.getElementById("buttondefault").style.display = "none";
    document.getElementById("buttonnewroom").style.display = "none";
    document.getElementById("roomname").value = "ELDERLY PEOPLE"
    document.getElementById("roomname").style.display = "block";
    document.getElementById("rowcanceldone").style.display = "block";
    roomtype = "default";
    console.log(roomtype);
}

function newroom() {
    document.getElementById("buttonback").style.display = "none";
    document.getElementById("buttondefault").style.display = "none";
    document.getElementById("buttonnewroom").style.display = "none";
    document.getElementById("roomname").value = ""
    document.getElementById("roomname").style.display = "block";
    document.getElementById("rowcanceldone").style.display = "block";
    roomtype = "new";
    console.log(roomtype);
}

function done() {
    if (roomtype == "default") {
        if (document.getElementById("roomname").value != "ELDERLY PEOPLE") {
            document.getElementById("roomname").value = "Sorry ! You cannot change the default room.";
            setTimeout(() => {
                document.getElementById("roomname").value = "To make your room please go for create your own room.";
                setTimeout(() => {
                    document.getElementById("roomname").value = "ELDERLY PEOPLE";
                }, 2000);
            }, 1600);
        }
        else {
            roomname = document.getElementById("roomname").value;
            document.getElementById("buttonback").style.display = "none";
            document.getElementById("buttondefault").style.display = "none";
            document.getElementById("buttonnewroom").style.display = "none";
            document.getElementById("roomname").style.display = "none";
            document.getElementById("rowcanceldone").style.display = "none";
            document.getElementById("loading").style.display = "block"
            localStorage.setItem("roomname" , ""+roomname+"");
            setTimeout(() => {
                console.log(roomname); 
                window.location = "chat_with_friends.html";
            }, 2000);
            
        }
    } else if (roomtype == "new") {
        if (document.getElementById("roomname").value == "") {
            document.getElementById("roomname").value = "Roomname is required !";
            setTimeout(() => {
                document.getElementById("roomname").value = "";
            }, 1500);
        }
        else {
            roomname = document.getElementById("roomname").value;
            document.getElementById("buttonback").style.display = "none";
            document.getElementById("buttondefault").style.display = "none";
            document.getElementById("buttonnewroom").style.display = "none";
            document.getElementById("roomname").style.display = "none";
            document.getElementById("rowcanceldone").style.display = "none";
            document.getElementById("loading").style.display = "block"
            localStorage.setItem("roomname" , ""+roomname+"");
            setTimeout(() => {
                console.log(roomname); 
                window.location = "chat_with_friends.html";
            }, 2000);   
        }
    }
}

function cancel() {
    document.getElementById("buttonback").style.display = "block";
    document.getElementById("buttondefault").style.display = "block";
    document.getElementById("buttonnewroom").style.display = "block";
    document.getElementById("roomname").style.display = "none";
    document.getElementById("rowcanceldone").style.display = "none";
}