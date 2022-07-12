from aiogram.client.bot import Bot
from aiogram.types.update import Update
from fastapi import APIRouter

from app.services.bot.dispatcher import dp
from app.config import config

router = APIRouter()


@router.post("/{token}/")
async def process_update(token: str, update: Update):
    await dp.feed_update(Bot(token=token, **config.bot_settings), update)
