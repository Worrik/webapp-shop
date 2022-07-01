from aiogram import Bot

from app.config.config import TOKEN
from app.core.models import UserModel, OrderModel

bot = Bot(token=TOKEN)


async def send_order(user: UserModel, order: OrderModel):
    pass
