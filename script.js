//create the id for the map object
var map = L.map('map-container');

//give the map a center
map.setView([44.971724,-93.243239], 16);

//add a basemap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
}).addTo(map);

//request GeoJSON and add layer to map
$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson", function(data){
    new L.geoJson(data).addTo(map)
});

//JQuery to add a click handler
$(".red.box").click(function(event){
    alert("Sorry, this link is no longer operable.");
    event.preventDefault();
});


























