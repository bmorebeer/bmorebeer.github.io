var map = L.map('map').setView([39.654, -79.768], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'bzelip.po70ia78',
  accessToken: 'pk.eyJ1IjoiYnplbGlwIiwiYSI6ImIwMTZjMmY1YzViODIyZmRkYmZiZWYxZmU3NWM1MzQwIn0.yz0R9vap9zNUMy73Q0lV2w'
}).addTo(map);

function Get(URL){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",URL,false);
  Httpreq.send(null);
  return Httpreq.responseText;
};

var breweryDataPath = '_data/breweries.json';
var breweryData = JSON.parse(Get(breweryDataPath));
console.log("data length is: " + breweryData.length);

for (i=0; i<breweryData.length; i++) {
  dataNav.innerHTML = dataNav.innerHTML + '<a class="btn btn-primary mb1" href="' + breweryData[i].url + '">' + breweryData[i].name + '</a>'
}
