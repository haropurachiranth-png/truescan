from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "TrueScan AI Backend Running"
    }

from pydantic import BaseModel

class Product(BaseModel):
    productName: str
    price: int

@app.post("/analyze")
def analyze_product(product: Product):

    score = 70
    classification = "First Copy"

    if product.price > 5000:
        score = 95
        classification = "Original"

    elif product.price > 2000:
        score = 80
        classification = "First Copy"

    else:
        score = 55
        classification = "Second Copy"

    return {
        "score": score,
        "classification": classification,
        "message": "AI analysis completed successfully."
    }