from fastapi import FastAPI

from app.initializer import init

app = FastAPI()

init(app)


def run():
    import uvicorn

    uvicorn.run("app.main:app")
