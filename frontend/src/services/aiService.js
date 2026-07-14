const API_URL = "http://127.0.0.1:8000/chat";

export async function askAI(message) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  const data = await response.json();

  if (data.reply) {
    return data.reply;
  }

  throw new Error(data.error || "Unknown Error");
}