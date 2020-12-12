
btnclick = ""
diahide = ""
hyphide = ""
jointhide = ""
bachide = ""

function checkhides() {
    if (diahide != "") {
        document.getElementById("ColumnDia").style.display = "none";
    }
    if (hyphide != "") {
        document.getElementById("ColumnHyp").style.display = "none";
    }
    if (jointhide != "") {
        document.getElementById("ColumnJoi").style.display = "none";
    }
    if (bachide != "") {
        document.getElementById("ColumnBac").style.display = "none";
    }
}

function addyes1() {
    btnclick = "dia";
    localStorage.setItem("btnclick" , "dia")
    window.location = "screen_health_tips_view.html";
    
}

function addno1() {
    document.getElementById("ColumnDia").style.display = "none";
    diahide = "diabetes";
}

function addyes2() {
    btnclick = "hyp";
    localStorage.setItem("btnclick" , "hyp")
    window.location = "screen_health_tips_view.html";
    
}

function addno2() {
    
    document.getElementById("ColumnHyp").style.display = "none"; 
    hyphide = "hypertension";
}

function addyes3() {
    btnclick = "joi";
    localStorage.setItem("btnclick" , "joi")
    window.location = "screen_health_tips_view.html";
    
}

function addno3() {
    document.getElementById("ColumnJoi").style.display = "none";
    jointhide = "joint pain";
}

function addyes4() {
    btnclick = "bac";
    localStorage.setItem("btnclick" , "bac")
    window.location = "screen_health_tips_view.html";
   
}

function addno4() {
    document.getElementById("ColumnBac").style.display = "none";
    bachide = "back pain";
}

function showdoanddont() {
    if (localStorage.getItem("btnclick") == "dia") {
        document.getElementById("do").innerHTML = " DOs : " + "\n" + "1.  Proper diet, regular exercise and meditation." + "\n" + "2.  Eat small and frequent meals. Control portion size; don’t give long gap between meals. Have early dinner." + "\n" + "3.  Include green leafy vegetables and sprouts, flax seeds, chia seeds daily." + "\n" + "4.  Include raw or fresh salads and high fiber food (wheat, ragi, jowar, millets and brans) in every meal." + "\n" + "5.  Take medications in time and check blood sugar levels regularly.";
        document.getElementById("dont").innerHTML = " DON'Ts : \n 1.  Cut down refined carbs like sweets and sweetened products like sugar, honey, jaggery, cakes, pastries etc. \n 2.  Avoid roots and tubers such as potato, sweet potato, beetroot, yam, tapioca and sweet pumpkin. \n 3.  Avoid aerated and caffeinated drinks such as pepsi, coke, fanta, diet coke, soda etc. \n 4.  Strictly avoid smoking and alcohol. \n 5.  Do not use artificial sweeteners beyond the recommended quantity.";
    } else if (localStorage.getItem("btnclick") == "hyp") {
        document.getElementById("do").innerHTML = " DOs : \n 1.  Maintain a healthy body weight. Lose weight if you are overweight. \n 2.  Follow a moderate exercise daily regimen (at least 30 minutes daily). \n 3.  Follow a healthy eating plan, which is low in sodium (salt). \n 4.  If you are being prescribed medication, take it regularly. \n 5.  Know your numbers (check your blood pressure regularly).";
        document.getElementById("dont").innerHTML = " DON'Ts : \n 1.  Avoid smoking and alcohol. \n 2.  Avoid stress. \n 3.  Avoid packaged foods like pickles, chips,etc. \n 4.  Avoid watching television while eating. \n 5.  Avoid foods reach in saturated fats.";
    } else if (localStorage.getItem("btnclick") == "joi") {
        document.getElementById("do").innerHTML = " DOs : \n 1.  Do exercise regularly. \n 2.  Do use RICE ( Rest, ice, compression, and elevation) for easing joint pain. \n 3.  Do try different temperatures for relief (cold compress and hot packs). \n 4.  Eat a healthy diet including calcium-rich foods like milk, meat, eggs, etc. \n 5.  Consult an Orthopaedician and take proper medications.";
        document.getElementById("dont").innerHTML = " DON'Ts : \n 1.  Don't rest too much.  \n 2.  Don't risk a fall. \n 3.  Avoid weight gain. \n 4.  Don't let your shoes cause you pain. \n 5.  Don't skip walking aids if you need them.";
    } else if (localStorage.getItem("btnclick") == "bac") {
        document.getElementById("do").innerHTML = " DOs : \n 1.  Do Regular Stretching Exercises. \n 2.  Do pay attention to your posture. \n 3.  Practice Yoga regularly. \n 4.  Do seek out Chiropractic Care. \n 5.  Consult a doctor and take proper medications.";
        document.getElementById("dont").innerHTML = " DON'Ts : \n 1.  Don't sleep on your Stomach \n 2.  Don't sit for long periods of time. \n 3.  Don't carry heavy objects or wear heels. \n 4.  Don't lie in bed or couch surf. \n 5.  Don't bend down for hours at a time.";
    } 
}
