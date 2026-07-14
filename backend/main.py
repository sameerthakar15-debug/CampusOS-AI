from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import os

# Load .env
load_dotenv()

# Get API Key
API_KEY = os.getenv("GEMINI_API_KEY")

print("API Key Loaded:", API_KEY[:10] + "..." if API_KEY else "NOT FOUND")

# Gemini Client
client = genai.Client(api_key=API_KEY)

# FastAPI App
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class ChatRequest(BaseModel):
    message: str

# Chat API
@app.post("/chat")
def chat(data: ChatRequest):
    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=data.message,
        )

        return {
            "reply": response.text
        }

    except Exception as e:
        return {
            "error": str(e)
        }

# Root Route
@app.get("/")
def home():
    return {
        "message": "CampusOS AI Backend Running 🚀"
    }