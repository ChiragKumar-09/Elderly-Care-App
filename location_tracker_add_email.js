var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var stop = ""

function addemail() {
    if (document.getElementById("add_email").value != "") {

        var addedemail = document.getElementById("add_email").value;
        var sendemail = addedemail.toLowerCase();
        console.log(sendemail);
        for (i = 0 ; i < letters.length  ; i++) {
           if (sendemail.includes(letters[i]) == true && sendemail.includes("@") == true && sendemail.includes(".com") == true) {
                stop = "yes";
                localStorage.setItem("SendEmail" , ""+ sendemail +"");
                window.location = "location_tracker.html";
                break;
           } else {
                stop = "no";
           }
        }

        if (i <= letters.length && stop != "yes") {
            console.log(stop);
            alert("Please Enter a Valid Email");
        }

    } else {
        alert("Please Fill Out This Field");
    }
}