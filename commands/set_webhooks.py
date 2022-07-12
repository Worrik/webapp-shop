from tortoise import Tortoise
from aiogram.client.bot import Bot

from app.config import config
from db_models import ShopModel

import asyncio


async def main():
    await Tortoise.init(config.TORTOISE_ORM)

    async for shop in ShopModel.all():
        bot = Bot(token=shop.bot_token, **config.bot_settings)
        print(
            await bot.set_webhook(f"{config.BASE_URL}/bots/{shop.bot_token}/")
        )


if __name__ == "__main__":
    asyncio.run(main())
