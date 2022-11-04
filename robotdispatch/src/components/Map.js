/* global google */
import React from "react";
// import { ReactDOM } from "react";

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.state = { lat: 37.77, lng: -122.447 };
  }
  // state = { setting: { lat: 37.77, lng: -122.447 } }
  // state = { lat: 37.77, lng: -122.447 };

  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = "AIzaSyDWxYHXA7PcOge0V73VJrvRBVcCrUoxumc";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map

    this.getGoogleMaps().then((google) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: this.state,
      });
      directionsRenderer.setMap(map);

      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

    const calculateAndDisplayRoute = (
      directionsService = google.maps.DirectionsService,
      directionsRenderer = google.maps.DirectionsRenderer
    ) => {
      directionsService
        .route({
          origin: this.state, // Haight.
          destination: { lat: 37.768, lng: -122.511 }, // Ocean Beach.
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to "));
    };
  }

  render() {
    return (
      <div>
        <div id="map" style={{ width: 475, height: 300 }}></div>
      </div>
    );
  }
}

export {GoogleMap};
