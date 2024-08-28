import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const ClassMap = ({ mapsCode }) => {
  console.log(mapsCode);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const testCoordinates = { lat: 43.5329, lng: -80.2264 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (isLoaded && mapRef.current && !markerRef.current) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: testCoordinates
      });
    }
  }, [isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={testCoordinates}
      zoom={10}
      onLoad={(map) => (mapRef.current = map)}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(ClassMap);
