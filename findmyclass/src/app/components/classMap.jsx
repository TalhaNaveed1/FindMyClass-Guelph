import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const ClassMap = ({ mapsCode }) => {
  console.log(mapsCode);

  const classCoordinates = {
    "ALEX": { lat: 43.5293, lng: -80.2277 },
    "THRN": { lat: 43.5312, lng: -80.2255 },
    "ROZH": { lat: 43.5322, lng: -80.2259 },
    "ANNU": { lat: 43.5296, lng: -80.2297 },
    "WMEM": { lat: 43.5325, lng: -80.2313 },
    "SCIE": { lat: 43.5309, lng: -80.2285 },
    "MCLN": { lat: 43.5313, lng: -80.2286 },
    "MACN": { lat: 43.5308, lng: -80.2273 },
    "HUTT": { lat: 43.5302, lng: -80.2270 },
    "MACK": { lat: 43.5326, lng: -80.2272 },
    "MCKN": { lat: 43.5326, lng: -80.2272 },
    "MINS": { lat: 43.5342, lng: -80.2320 },
    "MACS": { lat: 43.5343, lng: -80.2327 },
    "CRSC": { lat: 43.5318, lng: -80.2246 },
    "LIBRARY": { lat: 43.5315, lng: -80.2276 },
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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="bg-black p-8 rounded-xl mt-5 mb-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={17}
      >
        <MarkerF position={coordinates} />
      </GoogleMap>
    </div>
  ) : (
    <div className="bg-black p-8 rounded-xl">
      <h2 className="text-white text-center text-xl mt-4 font-semibold">Loading...</h2>
    </div>
  );
};

export default React.memo(ClassMap);
