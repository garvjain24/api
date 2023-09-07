import { GoogleMap, Autocomplete } from "google-maps";
import React, { useState } from "react";
const [userInput, setUserInput] = useState("");
const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  
const handleSubmit = (e) => {
  e.preventDefault();

  // Convert the user's input to latitude and longitude.
  const { latitude, longitude } = convertAddressToLatLng(userInput);

  // Do something with the latitude and longitude.
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
};
const convertAddressToLatLng = (address) => {
  <Autocomplete
  value={userInput}
  onChange={handleUserInput}
  options={{
    types: ["(cities)"],
  }}
/>
    // Create a geocoder object.
    const geocoder = new google.maps.Geocoder();
  
    // Geocode the address.
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK") {
        // Get the latitude and longitude of the first result.
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
  
        // Return the latitude and longitude.
        return { latitude, longitude };
      } else {
        // Handle the error.
        console.error("Error geocoding address:", address);
      }
    });
  }; 
  export {convertAddressToLatLng};