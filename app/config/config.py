from aiogram.client.session.aiohttp import AiohttpSession
from environs import Env

env = Env()
env.read_env()

DATABASE_URL = env.str("DATABASE_URL")
BASE_URL = env.str("BASE_URL", "http://localhost:8000")


TORTOISE_ORM = {
    "connections": {"default": DATABASE_URL},
    "apps": {
        "models": {
            "models": ["app.models", "aerich.models"],
            "default_connection": "default",
        },
    },
}

session = AiohttpSession()
bot_settings = {"session": session, "parse_mode": "HTML"}
