import os
import aioredis
from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tortoise.contrib.fastapi import register_tortoise
from app.api.routers.admin.providers import LoginProvider
from app.api.routers.admin.resources import register_admin

from app.services.auth import telegram_auth
from app.config.config import BASE_DIR, TORTOISE_ORM
from app.models.user import AdminModel, UserModel
from app.api.graphql.schema import graphql_app
from app.api.routers import bots
from app.config import config

from app.api.routers.admin.routes import admin_app

from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
    HTTP_500_INTERNAL_SERVER_ERROR,
)
from fastapi_admin.exceptions import (
    forbidden_error_exception,
    not_found_error_exception,
    server_error_exception,
    unauthorized_error_exception,
)


def init(app: FastAPI) -> None:
    init_routers(app)
    init_db(app)
    init_dependencies(app)
    init_middlewares(app)
    init_admin(app)


def init_routers(app: FastAPI) -> None:
    app.include_router(graphql_app, prefix="/graphql")
    app.include_router(bots.router, prefix="/bots")
    app.mount("/web", StaticFiles(directory="web", html=True), name="web")


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


def init_admin(app: FastAPI):
    register_admin(admin_app)

    admin_app.add_exception_handler(
        HTTP_500_INTERNAL_SERVER_ERROR, server_error_exception
    )
    admin_app.add_exception_handler(
        HTTP_404_NOT_FOUND, not_found_error_exception
    )
    admin_app.add_exception_handler(
        HTTP_403_FORBIDDEN, forbidden_error_exception
    )
    admin_app.add_exception_handler(
        HTTP_401_UNAUTHORIZED, unauthorized_error_exception
    )

    @app.on_event("startup")
    async def startup():
        redis = aioredis.from_url(
            config.REDIS_URL,
            decode_responses=True,
            encoding="utf8",
        )
        await admin_app.configure(
            template_folders=["templates"],
            providers=[
                LoginProvider(
                    admin_model=AdminModel,
                )
            ],
            redis=redis,
        )

    app.mount("/admin", admin_app)
