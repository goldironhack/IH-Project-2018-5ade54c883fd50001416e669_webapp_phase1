var map;

var pointcenter = {lat:40.7291, lng:-73.9965}

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: pointcenter
  });
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
