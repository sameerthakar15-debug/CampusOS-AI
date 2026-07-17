const API_URL = "http://127.0.0.1:8000/chat";

export async function askAI(message) {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("User:", user);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: user.uid,
      message,
    }),
  });

  console.log("Status:", response.status);

  const data = await response.json();

  console.log("Response:", data);

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data.reply;
}