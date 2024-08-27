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

    let imgSrc = '';
    let description = '';

    if (prediction === 'low') {
        imgSrc = '/traffic_images/low.png';
        description = 'Expect a quick travel time to your class';
    }
    else if (prediction === 'mid') {
        imgSrc = '/traffic_images/mid.png';
        description = 'Expect the average travel time to your class';
    }
    else {
        imgSrc = '/traffic_images/high.png';
        description = 'Expect a longer travel time to your class';
    }


    return (
        <div className="flex flex-col bg-black p-12 rounded-xl items-center">
            <img src="/traffic_images/high.png" alt="traffic_display" className="w-[200px] h-[150px]" />
            <p className="text-white text-center text-xl mt-4 max-w-[80%] md:max-w-[300px] mx-auto">
  At 8:34pm, we estimate it may take you <em><b><u>longer</u></b></em> than average to reach your class.
</p>
            {/* <h2 className="text-white text-2xl">{prediction}</h2> */}
        </div>
    )
}