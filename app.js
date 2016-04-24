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
  var id1Marker = L.marker([39.278142,-76.828144]).addTo(map);
}

id2.onclick = function() {
  var id2Marker = L.marker([39.284312,-76.621947]).addTo(map);
}

id3.onclick = function() {
  var id3Marker = L.marker([38.781061,-76.221889]).addTo(map);
}

id4.onclick = function() {
  var id4Marker = L.marker([39.340208,-76.479152]).addTo(map);
}

id5.onclick = function() {
  var id5Marker = L.marker([39.268078,-76.799517]).addTo(map);
}

id6.onclick = function() {
  var id6Marker = L.marker([39.324356,-76.61042]).addTo(map);
}

id7.onclick = function() {
  var id7Marker = L.marker([39.230827,-76.675131]).addTo(map);
}

id8.onclick = function() {
  var id8Marker = L.marker([39.539846,-76.35683]).addTo(map);
}

id9.onclick = function() {
  var id9Marker = L.marker([39.249733,-76.888174]).addTo(map);
}

id10.onclick = function() {
  var id10Marker = L.marker([39.324356,-76.61042]).addTo(map);
}

id11.onclick = function() {
  var id11Marker = L.marker([39.314815,-76.553197]).addTo(map);
}

id12.onclick = function() {
  var id12Marker = L.marker([39.286605,-76.61815]).addTo(map);
}

id13.onclick = function() {
  var id13Marker = L.marker([39.324356,-76.61042]).addTo(map);
}

id14.onclick = function() {
  var id14Marker = L.marker([39.186054,-76.825262]).addTo(map);
}

id15.onclick = function() {
  var id15Marker = L.marker([39.324356,-76.61042]).addTo(map);
}

id16.onclick = function() {
  var id16Marker = L.marker([39.280742,-76.566968]).addTo(map);
}

id17.onclick = function() {
  var id17Marker = L.marker([39.302778,-76.61638]).addTo(map);
}

id18.onclick = function() {
  var id18Marker = L.marker([39.332275,-76.643274]).addTo(map);
}

id19.onclick = function() {
  var id19Marker = L.marker([39.331648,-76.641297]).addTo(map);
}

id20.onclick = function() {
  var id20Marker = L.marker([39.371559,-76.466343]).addTo(map);
}



/*
dynamic data =
  1. brewery id
  2. brewery lat,long
  3. marker variable name



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
*/
