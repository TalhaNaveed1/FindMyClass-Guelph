export async function fetchWalkTime() {
  const apiResponse = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  const timeData = await apiResponse.json();
  const datetime = new Date(timeData.datetime);
  const dayOfWeek = datetime.getUTCDay();
  const month = datetime.getUTCMonth();
  const hour = datetime.getUTCHours();

  console.log(dayOfWeek);
  console.log(month);
  console.log(hour);

  const backendResponse = await fetch("http://127.0.0.1:5000/predict", {
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
  return predictionData.predictedClass;

}
