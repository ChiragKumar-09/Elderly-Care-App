function back() {
   window.location = "homepage.html";
}

function nav_addemail() {
   window.location = "location_tracker_add_email.html";
}

function sendlocation() {
   if (localStorage.getItem("SendEmail")) {
      latilongi = document.getElementById("demo").innerHTML;
      latlong = latilongi.split(" : ")[1];
      var a_tag = document.getElementById("link");
      a_tag.href = "mailto:"+ localStorage.getItem("SendEmail") +"?Subject=My Location&Body="+ latlong +"     Paste this latitude and longitude in the google maps to get my location...";
      a_tag.click();
   } else {
      alert("Please add a email first to whom you want to send the location !");
   }
   
}

const marker = ({});

// Initialize and add the map
function initMap() {
   // The location of Uluru
   const uluru = { lat: 22.9734229, lng: 78.6568942 };
   // The map, centered at Uluru
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: uluru,
   });
   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
     position: uluru,
     map: map,
     title: "Your Location",
   });
 }

var x = document.getElementById("demo");
        function getLocation() {
           setInterval(function() {
            var watchId = navigator.geolocation.watchPosition(showPosition , showError);
            document.getElementById("button").click();
           } , 50)  
        }
        
        function showPosition(position) {
            var latlon = position.coords.latitude + " , " + position.coords.longitude;
            console.log(latlon);
            document.getElementById("demo").innerHTML = "Your Location Is : " + latlon;
           }

        function showError(error) {
          switch(error.code) {
            case error.PERMISSION_DENIED:
               document.getElementById("demo").innerHTML = "You denied the request for Geolocation."
               break;
            case error.POSITION_UNAVAILABLE:
               document.getElementById("demo").innerHTML = "Location information is unavailable."
               break;
            case error.TIMEOUT:
               document.getElementById("demo").innerHTML = "The request to get user location timed out."
               break;
            case error.UNKNOWN_ERROR:
               document.getElementById("demo").innerHTML = "An unknown error occurred."
               break;
          }

                   
        }