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

  return dayOfWeek,month,hour
}
