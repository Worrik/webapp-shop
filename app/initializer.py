from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tortoise.contrib.fastapi import register_tortoise

from app.services.auth import telegram_auth
from app.config.config import TORTOISE_ORM
from app.api.graphql.schema import graphql_app
from app.api.routers import bots

from db_models import UserModel


def init(app: FastAPI) -> None:
    init_routers(app)
    init_db(app)
    init_dependencies(app)
    init_middlewares(app)


def init_routers(app: FastAPI) -> None:
    app.include_router(graphql_app, prefix="/graphql")
    app.include_router(bots.router, prefix="/shopbot")
    app.mount(
        "/web", StaticFiles(directory="static/web", html=True), name="web"
    )
    app.mount(
        "/admin", StaticFiles(directory="static/admin", html=True), name="web"
    )


def init_db(app: FastAPI) -> None:
    register_tortoise(app, config=TORTOISE_ORM)


def init_dependencies(app: FastAPI) -> None:
    app.dependency_overrides[UserModel] = telegram_auth


def init_middlewares(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
