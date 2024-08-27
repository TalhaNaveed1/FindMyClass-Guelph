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


    return (
        <div>
            <h1 className="text-white text-4xl">Predicted Time:</h1>
            <h2 className="text-white text-4xl">{prediction}</h2>
        </div>
    )
}