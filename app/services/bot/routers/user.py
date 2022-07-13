from aiogram import Bot, Router
from aiogram.dispatcher.filters import Command
from aiogram.types import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    Message,
    WebAppInfo,
)

from app.config import config
from db_models import UserModel, ShopModel


router = Router()


@router.message(Command(commands=["start"]))
async def command_start(message: Message, bot: Bot):
    if message.from_user and not await UserModel.get_or_none(
        telegram_id=message.from_user.id
    ):
        await UserModel.create(
            telegram_id=message.from_user.id,
            first_name=message.from_user.first_name,
            last_name=message.from_user.last_name,
            username=message.from_user.username,
            language_code=message.from_user.language_code,
        )

    shop = await ShopModel.get(bot_token=bot.token)

    await message.answer(
        "Test",
        reply_markup=InlineKeyboardMarkup(
            inline_keyboard=[
                [
                    InlineKeyboardButton(
                        text="Open",
                        web_app=WebAppInfo(
                            url=f"{config.BASE_URL}/web?shop={shop.id}"
                        )
                    )
                ]
            ]
        )
    )