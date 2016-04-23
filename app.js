var map = L.map('map').setView([39.2903848, -76.6121893], 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'bzelip.po70ia78',
  accessToken: 'pk.eyJ1IjoiYnplbGlwIiwiYSI6ImIwMTZjMmY1YzViODIyZmRkYmZiZWYxZmU3NWM1MzQwIn0.yz0R9vap9zNUMy73Q0lV2w'
}).addTo(map);
//var marker = L.marker([39.249733,-76.888174]).addTo(map);



function Get(URL){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",URL,false);
  Httpreq.send(null);
  return Httpreq.responseText;
};


// Dynamically populate DOM with each brewery as a link to their website
var breweryDataPath = '_data/breweries.json';
var breweryData = JSON.parse(Get(breweryDataPath));

for (i=0; i<breweryData.length; i++) {
  dataNav.innerHTML = dataNav.innerHTML + '<a id="id' + breweryData[i].id + '" class="block orange mb1" href="#">' + breweryData[i].name + '</a>'
}

id1.onclick = function() {
  var marker = L.marker([39.249733,-76.888174]).addTo(map);
}

/*
dynamic data =
  1. brewery id
  2. brewery lat,long
  3. marker variable name

*/

// create marker variable names
//    set the global var markerVars instead of creating a global var inside a function
//      - see http://blog.niftysnippets.org/2008/03/horror-of-implicit-globals.html and
//      - see http://stackoverflow.com/questions/5786851/define-global-variable-in-a-javascript-function#5786899
var markerVars = [];
function createMarkerVars() {
  for (i=0; i<breweryData.length; i++) {
    markerVars[i] = 'id' + breweryData[i].id + 'marker';
  }
  return markerVars;
}
createMarkerVars();
console.log('markerVars is: ' + markerVars);


// create array of brewery ids as "idX"
var idArr = [];
function createIdArr() {
  for (i=0; i<breweryData.length; i++) {
    idArr[i] = 'id' + breweryData[i].id;
  }
  return idArr;
}
createIdArr();
console.log('idArr is: ' + idArr);


// create array of lat,long arrays
var coordsArr = [];
function createCoordsArr() {
  for (i=0; i<breweryData.length; i++) {
    coordsArr[i] = [breweryData[i].lat,breweryData[i].long];
  }
  return coordsArr;
}
createCoordsArr();
console.log('coordsArr[1] is: ' + coordsArr[1]);
