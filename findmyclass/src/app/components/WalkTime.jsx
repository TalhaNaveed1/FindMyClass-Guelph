import { useState, useEffect } from "react";
import { fetchWalkTime } from "../utils/fetchWalkTime";

export default function WalkTime({ view }) {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function getPrediction() {
      const predictedTime = await fetchWalkTime();
      setPrediction(predictedTime);
    }

    getPrediction();
  }, []);

  let imgSrc = "";
  let description = "";

  if (prediction) {
    const { predictedLevel, currentTime } = prediction;

    if (predictedLevel === "low") {
      imgSrc = "/traffic_images/low.png";
      description = (
        <>
          At {currentTime}, expect a <b><u>low</u></b> travel time to your class
        </>
      );
    } else if (predictedLevel === "mid") {
      imgSrc = "/traffic_images/mid.png";
      description = (
        <>
        At {currentTime}, expect the <b><u>average</u></b> travel time to your class
        </>
      );
    } else {
      imgSrc = "/traffic_images/high.png";
      description = (
        <>
          At {currentTime}, expect a <b><u>longer</u></b> travel time to your class
        </>
      );
    }
  }

  const imageStyle = view === 1 ? "w-[150px] h-[100px]" : "w-[200px] h-[150px]";
  const descriptionStyle = view === 1 ? "text-lg" : "text-2xl";

  return (
    <div className="flex flex-col bg-black p-8 md:p-12 rounded-xl items-center w-[350px] md:w-auto md:mt-32">
      {prediction ? (
        <>
          <img
            src={imgSrc}
            alt="traffic_display"
            className={`${imageStyle} object-contain`}
          />
          <p className={`text-white text-center ${descriptionStyle} font-semibold mt-4 max-w-[80%] md:max-w-[300px] mx-auto`}>
            {description}
          </p>
        </>
      ) : (
        <p className="text-white text-center text-xl mt-4 font-semibold font-sans">
          Loading prediction...
        </p>
      )}
    </div>
  );
}
