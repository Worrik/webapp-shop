from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tortoise.contrib.fastapi import register_tortoise
from app.auth import telegram_auth
from app.config.config import TORTOISE_ORM
from app.core.models.user import UserModel
from app.schema import graphql_app


def init(app: FastAPI) -> None:
    init_routers(app)
    init_db(app)
    init_dependencies(app)
    init_middlewares(app)


def init_routers(app: FastAPI) -> None:
    app.include_router(graphql_app, prefix="/graphql")
    app.mount("/static", StaticFiles(directory="static", html=True), name="static")


def init_db(app: FastAPI) -> None:
    register_tortoise(app, config=TORTOISE_ORM)


def init_dependencies(app: FastAPI) -> None:
    app.dependency_overrides[UserModel] = telegram_auth


def init_middlewares(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
