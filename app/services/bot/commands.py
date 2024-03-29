from typing import List
from aiogram import Bot, types

from db_models import UserModel, OrderProductModel
from app.models.shop import ShopModel
from app.utils.format_order import format_order


async def send_order(
    bot: Bot,
    user: UserModel,
    order_products: List[OrderProductModel],
    shop: ShopModel,
):
    text = format_order(order_products)
    await bot.answer_web_app_query(
        user.web_app_data.get("query_id"),
        types.InlineQueryResultArticle(
            type="article",
            id="1",
            title="1",
            input_message_content=types.InputTextMessageContent(
                message_text=text, parse_mode="HTML"
            ),
        ),
    )

    owner: UserModel = await shop.owner.get()
    m = await bot.send_message(
        chat_id=owner.telegram_id, text=text, parse_mode="HTML"
    )
    await bot.send_message(
        text=f"From user {user}",
        chat_id=owner.telegram_id,
        reply_to_message_id=m.message_id,
    )
