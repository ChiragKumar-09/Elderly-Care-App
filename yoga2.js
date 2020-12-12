
function count() {
    speechSynthesis.cancel();
    counting = 1;
    utterance = new SpeechSynthesisUtterance("Let's Start.")
    utterance.rate  = 2;
    speechSynthesis.speak(utterance);
    
    setInterval(function() {
        if (counting <= 30) {
            utterance = new SpeechSynthesisUtterance(counting)
            utterance.rate = 2;
            speechSynthesis.speak(utterance);  
            document.getElementById("count_label").innerHTML = counting;          
            counting++;
            if (counting > 30) {
                utteran = new SpeechSynthesisUtterance("Now Relax....")
                utteran.rate=2
                speechSynthesis.speak(utteran)
            }
            if (counting > 20) {
                utterance.rate = 3.5;
            }
            if (counting >= 30) {
                utterance.rate = 2;
            }
        }
    }, 1000);
}


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
    var counting = document.getElementById("count_label");
    var button_ready = document.getElementById("ready");
    var a_tag_back = document.getElementById("back_a");
    var start_1 = document.getElementById("start");

    const utt = new SpeechSynthesisUtterance(" Lie flat on the back keeping the legs straight and together. Keep the arms by the sides with the palms down. Head, neck & spine should be in a straight line. Raise both the legs, bend the knees and bring the thighs close to the chest. To bring the thighs closer to the chest, interlock the fingers of both hands and hold the legs from just below the knees. Inhale deeply. Hold the position for 30 seconds or as per your comfort. Come back to base position and relax.");
    speechSynthesis.speak(utt);
    start_1.style.display = "none"
    button_ready.style.display = "block"
    a_tag_back.style.display = "block"
    counting.style.display = "block"
}

function stop() {
    speechSynthesis.cancel()
}