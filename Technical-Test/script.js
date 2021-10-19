"use strict"

//strava info:
//access token: bc4bc1c934a9285f6fe9f88d5afa6fcb9861da92
//refresh token: 4a00427bb2a5508e4f7020bda319b94f8a0a9e77
//100 req. /15min

//mapbox:
//pk.eyJ1IjoiYXNobGV5aGFydCIsImEiOiJja3VzajN0OWIwZjYwMm9tZnRhNnFmM2NjIn0._6gEaBHQtsooSxw223YP7A

window.onload = () => {
  let profile = "mapbox/walking";
  let coordinates = [4.294575328274752, 50.78668775413435, 4.2646456534138135, 50.752852661976945];
  let accestoken = 'pk.eyJ1IjoiYXNobGV5aGFydCIsImEiOiJja3VzajN0OWIwZjYwMm9tZnRhNnFmM2NjIn0._6gEaBHQtsooSxw223YP7A';
  mapboxgl.accessToken = accestoken;
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11'
  });

  fetch(`https://api.mapbox.com/directions/v5/${profile}/${coordinates[0]},${coordinates[1]};${coordinates[2]},${coordinates[3]}?geometries=geojson&access_token=${accestoken}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });


}