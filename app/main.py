from fastapi import FastAPI

from app.initializer import init

app = FastAPI()

init(app)
