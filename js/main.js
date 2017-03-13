function init() {
    var mapOptions = {
        center: new google.maps.LatLng(44.843456, 20.407123),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBlVnAXqLYftv-wDYkBXsNkuyEjwIcwKoo&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;