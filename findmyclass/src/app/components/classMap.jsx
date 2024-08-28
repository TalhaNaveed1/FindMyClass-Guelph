import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ClassMap = () => {
  const mapStyle = {
    width: "200px",
    height: "400px",
  };

  const testCoordinates = { lat: 43.5329, lng: -80.2264 };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyle}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(ClassMap);
