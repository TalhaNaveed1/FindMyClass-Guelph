import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const ClassMap = ({ mapsCode }) => {
  console.log(mapsCode);

  const classCoordinates = {
    "ALEX": { lat: 43.5293, lng: -80.2277 },
    "THRN": { lat: 43.5312, lng: -80.2255 },
    "ROZH": { lat: 43.5322, lng: -80.2259 },
    "ANNU": { lat: 43.5296, lng: -80.2297 },
    "MACN": { lat: 43.5296, lng: -80.2297 },
  };
  let coordinates = '';

  if (mapsCode.slice(0,2) == 'FS') {
    coordinates = { lat: 43.5298, lng: -80.2310 }
  }
  else if (mapsCode.slice(0,2) == 'LA') {
    coordinates = { lat: 43.5324, lng: -80.2252 }
  }
  else if (mapsCode.slice(0,2) == 'ZAV') {
    coordinates = { lat: 43.5310, lng: -80.2272 }
  }
  else {
    coordinates = classCoordinates[mapsCode.slice(0,4)]
  }

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
