// Design map of hospitals...
const showHospitalsMap = () => {
  // +1 Delete form of available hospitals...
  deleteHospitalsFrm()
  console.log("@run<1>: <<deleting form>>.");
  
  // +2 Initialize map...
  console.log("@run<2>: <<Creating map>>.");
  // hsptls >> is variable that has just 10 avaialbe hospitals for @user  
  // console.table(hsptls);
  initMap();
  // +3 Display map...
  console.log("@run<3>: <<Displaying map>>.");
  // dspMap("Map Created")
}


// Return marker of number
const markersStore = ( markerN ) => {
 
  return `http://maps.google.com/mapfiles/kml/paddle/${markerN}.png`;
}

// Delete form that get available hospitals
let deleteHospitalsFrm = () => {
  let frm = document.getElementById("selectHospitals");
  frm.hidden = true;
}

// Display map
const dspMap = ( mapCreated ) => {
  document.getElementById("map").innerHTML = mapCreated;
}


function initMap(){
  // Map options
  var options = {
    zoom:10,
    center:{lat:30.62,lng:31.63}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);
// move pin and current location
infoWindow = new google.maps.InfoWindow;
    geocoder = new google.maps.Geocoder();
  
  // Handle location errors
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
  
  //  Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://www.freepik.com/free-vector/hospital-building-ambulance-car_8924468.htm#page=1&query=hospital%20icon&position=3'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });


  // Marker Handlers
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  
  
  // Markers
  var markers = [];  
  // Handle coordinates of @Hospitals or @Conveys
  let handleCoordinates = (coordinates) => {
    const crdVls = coordinates.split(","); ["", ""]
    return {
      lat: parseFloat(crdVls[0]),
      lng: parseFloat(crdVls[1]),
    }
  }
  
  // hsptls
  // Initialize markers of @Hospitals
  const initHospitalsMarkers = () => {
    for (let y = 0; y < hsptls.length; y++) {
      markers.push({
        coords: handleCoordinates(hsptls[y].coordination),
        "iconImage":'http://maps.google.com/mapfiles/ms/micons/hospitals.png',
      })
    }
  }
  
initHospitalsMarkers()    
  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
    
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}

