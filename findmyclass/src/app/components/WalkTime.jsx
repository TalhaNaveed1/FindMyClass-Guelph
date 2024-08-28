import { useState, useEffect } from "react";
import { fetchWalkTime } from "../utils/fetchWalkTime";

export default function WalkTime() {
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

    if (prediction === "low") {
      imgSrc = "/traffic_images/low.png";
      description = `At ${currentTime}, expect a low travel time to your class`;
    } else if (prediction === "mid") {
      imgSrc = "/traffic_images/mid.png";
      description = `At ${currentTime}, expect the average travel time to your class`;
    } else {
      imgSrc = "/traffic_images/high.png";
      description = `At ${currentTime}, expect a longer travel time to your class`;
    }
  }

  return (
    <div className="flex flex-col bg-black p-12 rounded-xl items-center mt-32">
      {prediction ? (
        <>
          <img
            src={imgSrc}
            alt="traffic_display"
            className="w-[200px] h-[150px]"
          />
          <p className="text-white text-center text-2xl font-semibold mt-4 max-w-[80%] md:max-w-[300px] mx-auto">
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
