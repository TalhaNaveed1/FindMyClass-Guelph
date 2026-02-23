export async function fetchWalkTime() {
  const now = new Date();

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    weekday: "short",
    month: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const hour = Number(parts.find(p => p.type === "hour")?.value); // 0-23
  const month = Number(parts.find(p => p.type === "month")?.value) - 1; // 0-11

  const jsDay = now.toLocaleString("en-CA", { timeZone: "America/Toronto", weekday: "short" });
  const map = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
  const dayOfWeek = map[jsDay];

  const displayTime = now.toLocaleTimeString("en-CA", {
    timeZone: "America/Toronto",
    hour: "numeric",
    minute: "2-digit",
  });

  const backendResponse = await fetch("https://talhanaveedfmcg.pythonanywhere.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ day_of_week: dayOfWeek, month, hour }),
  });

  const predictionData = await backendResponse.json();
  return {
    predictedLevel: predictionData.predictedLevel,
    currentTime: displayTime,
  };
}
