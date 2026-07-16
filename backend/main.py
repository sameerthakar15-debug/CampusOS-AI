from routes.faculty import router as faculty_router
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
client = genai.Client(api_key=API_KEY) if API_KEY else None

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

app.include_router(faculty_router)

# Request Model
class ChatRequest(BaseModel):
    message: str

# Chat API
@app.post("/chat")
def chat(data: ChatRequest):

    if client is None:
        return {
            "error": "Gemini API key is not configured."
        }

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
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
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import os
import firebase_admin
from firebase_admin import credentials, auth, firestore

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
# -----------------------------
# Firebase Admin Initialization
# -----------------------------

cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred)

firestore_db = firestore.client()

print("✅ Firebase Admin Connected")

from routes.student import router as student_router

app.include_router(student_router)