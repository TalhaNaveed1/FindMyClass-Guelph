import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const ClassMap = ({ mapsCode }) => {
  console.log(mapsCode);

  const containerStyle = {
    width: "400px",
    height: "300px",
  };

  const testCoordinates = { lat: 43.5329, lng: -80.2264 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="bg-black p-8 rounded-xl mt-5 mb-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={testCoordinates}
        zoom={10}
      >
        <MarkerF position={testCoordinates} />
      </GoogleMap>
    </div>
  ) : (
    <div className="bg-black p-8 rounded-xl">
      <h2 className="text-white text-center text-xl mt-4 font-semibold">Loading...</h2>
    </div>
  );
};

export default React.memo(ClassMap);
