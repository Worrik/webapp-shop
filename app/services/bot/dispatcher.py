from aiogram.dispatcher.dispatcher import Dispatcher
from .routers import admin, user

dp = Dispatcher()

dp.include_router(admin.router)
dp.include_router(user.router)
