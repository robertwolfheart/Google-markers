function getMap(){
  var mapOptions = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    
    return new google.maps.Map(document.getElementById("dvMap"), mapOptions);
}

function addMarker(marker, map, all) {
    var googleLocation = new google.maps.LatLng(marker.lat, marker.lng);
	var marker = getMarker(googleLocation, map, marker.color);
	all.extend(marker.position);
}

function getMarker(googleLocation, map, color){
  return new MarkerWithLabel({
              position: googleLocation,
              map: map,
              icon: pinSymbol(color),
	          labelAnchor: new google.maps.Point(15, 65),
              labelInBackground: false
          });
}

function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 0.9,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
   };
}

function drawMarkers(){
    var map = getMap();
    var all = new google.maps.LatLngBounds();
	
    for(var i in markers){
      addMarker(markers[i], map, all);  
    }	
	
	map.setCenter(all.getCenter());
}


window.onload = function () {
	drawMarkers();
}