from typing import List
from aiogram import Bot, types

from app.config.config import TOKEN
from app.core.models import UserModel
from app.core.models.order import OrderProductModel
from app.utils.format_order import format_order

bot = Bot(token=TOKEN)


async def send_order(user: UserModel, order_products: List[OrderProductModel]):
    await bot.answer_web_app_query(
        user.web_app_data.get("query_id"),
        types.InlineQueryResult(text=format_order(order_products)),
    )
