export async function fetchWalkTime() {
  const apiResponse = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  const timeData = await apiResponse.json();
  const datetime = new Date(timeData.datetime);
  const dayOfWeek = datetime.getDay();
  const month = datetime.getMonth();
  const hour = datetime.getHours();
  const displayTime = datetime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  const backendResponse = await fetch("https://talhanaveedfmcg.pythonanywhere.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      day_of_week: dayOfWeek,
      month: month,
      hour: hour,
    }),
  });

  const predictionData = await backendResponse.json();
  return {
    predictedLevel: predictionData.predictedLevel,
    currentTime: displayTime
  };

}
