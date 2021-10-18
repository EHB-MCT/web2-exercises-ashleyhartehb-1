"use strict"

//strava info:
//access token: bc4bc1c934a9285f6fe9f88d5afa6fcb9861da92
//refresh token: 4a00427bb2a5508e4f7020bda319b94f8a0a9e77
//100 req. /15min

//mapbox:
//pk.eyJ1IjoiYXNobGV5aGFydCIsImEiOiJja3VzajN0OWIwZjYwMm9tZnRhNnFmM2NjIn0._6gEaBHQtsooSxw223YP7A

window.onload = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXNobGV5aGFydCIsImEiOiJja3VzajN0OWIwZjYwMm9tZnRhNnFmM2NjIn0._6gEaBHQtsooSxw223YP7A';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11'
  });

  async function getData(url = 'https://api.mapbox.com', data = {}) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
      //body: JSON.stringify(data)

    });
    console.log(response.json());
    return response.json();
  }

  getData();
  //console.log(data);
  //document.getElementById("apicall").innerText = data;
}