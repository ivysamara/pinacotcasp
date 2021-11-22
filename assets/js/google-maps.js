function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -23.53403, lng: -46.63389};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pinacoteca de São Paulo' // Title Location
    });
}