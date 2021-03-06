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

    const utt = new SpeechSynthesisUtterance("Stand up straight with your feet apart, spine erect and shoulders straight. Stretch your hands to the front, palms facing each other.  First inhale and then while exhaling twist from the waist to the right and look back over the right. Keep your breath out and stay in this position as long as possible. Inhale and slowly come back to the center. Exhale and repeat the same on the left. Stay in this final posture as long as possible. Come back to the center and relax. This is the complete cycle of this posture. This can be repeated 10 to 20 times.");
    speechSynthesis.speak(utt);
    start_1.style.display = "none"
    a_tag_back.style.display = "block"
}

function stop() {
    speechSynthesis.cancel()
}