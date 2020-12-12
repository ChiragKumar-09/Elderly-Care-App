function onloaded() {
    var counting_at_start = document.getElementById("counting_at_start");
    var counting_at_start_2 = document.getElementById("counting_at_start_2");
    var counting_at_start_3 = document.getElementById("counting_at_start_3");

    var start_1 = document.getElementById("start");
    var image_yoga = document.getElementById("image");
    var about_yoga = document.getElementById("about");

    var opacity_1 = Number(window.getComputedStyle(counting_at_start).getPropertyValue("opacity"));
    var opacity_2 = Number(window.getComputedStyle(counting_at_start_2).getPropertyValue("opacity"));
    var opacity_3 = Number(window.getComputedStyle(counting_at_start_3).getPropertyValue("opacity"));

    var time_for = 3;

    setInterval(() => {
        if (time_for == 3) {
            if (opacity_1 > 0) {
                intervalID =  setInterval(() => {
                     opacity_1  = opacity_1 - 0.1;
                     counting_at_start.style.opacity = opacity_1;
                 }, 100);
             }
             else {
                 clearInterval(intervalID);
                 time_for = 2
                 counting_at_start.style.display = "none";
                 counting_at_start_2.style.display = "block";
             }
        }
       
       
         // new code
         if (time_for == 2) {
            if (opacity_2 > 0) {
                intervalID =  setInterval(() => {
                    opacity_2  = opacity_2 - 0.1;
                    counting_at_start_2.style.opacity = opacity_2;
                }, 100);
             } else {
                clearInterval(intervalID);
                time_for = 1
                counting_at_start_2.style.display = "none";
                counting_at_start_3.style.display = "block";
             }
         }
         

         // new code
         if (time_for == 1) {
            if (opacity_3 > 0) {
                intervalID =  setInterval(() => {
                    opacity_3  = opacity_3 - 0.1;
                    counting_at_start_3.style.opacity = opacity_3;
                }, 100);
             } else {
                clearInterval(intervalID);
                time_for = 0
                counting_at_start_3.style.display = "none";
                start_1.style.display = "block"
                about_yoga.style.display = "block"
                image_yoga.style.display = "block"
             }
         }
         
    }, 100);
  
}    

function start() {
    var a_tag_back = document.getElementById("back_a");
    var start_1 = document.getElementById("start");

    const utt = new SpeechSynthesisUtterance("Combine both legs together and stand in an erect position with both hands on the side of the thighs. Now slowly lift your body with the help of the toes while breathing in. Stick all the fingers together and then lift the arm up and stretch the body upwards. Keep the spine and neck straight.  After staying in this position for some time, exhale and come back to the normal position. Practice this for 5-6 times.");
    speechSynthesis.speak(utt);
    start_1.style.display = "none"
    a_tag_back.style.display = "block"
}

function stop() {
    speechSynthesis.cancel()
}