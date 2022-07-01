from environs import Env

env = Env()
env.read_env()

TOKEN = env.str("TOKEN")
DATABASE_URL = env.str("DATABASE_URL")


TORTOISE_ORM = {
    "connections": {"default": DATABASE_URL},
    "apps": {
        "models": {
            "models": ["app.core.models", "aerich.models"],
            "default_connection": "default",
        },
    },
}

