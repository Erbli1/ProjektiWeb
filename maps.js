function initMap() {
    // Specify the coordinates of the location you want to display
    const myLatLng = { lat: 42.64458267282415, lng: 21.146151956656915 };

    // Create a map centered on the specified coordinates
    const map = new google.maps.Map(document.getElementById("map-container"), {
      center: myLatLng,
      zoom: 12,
    });

    // Create a marker on the specified coordinates
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Liridon Qorraj Studio",
    });
  }