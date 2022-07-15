from fastapi import Header
from typing import Optional, Tuple

import json
from app.models.shop import ShopModel

from db_models import UserModel
from app.utils.check_web_app import check_webapp_signature


async def telegram_auth(
    shop_id: int = 2,
    Authorization: str = Header(default='')
) -> Tuple[Optional[UserModel], ShopModel]:
    shop = await ShopModel.get(id=shop_id)
    user = await UserModel.get(id=19)
    return user, shop

    user_data = check_webapp_signature(shop.bot_token, Authorization)

    if not user_data:
        return None, shop

    user_data["user"] = json.loads(user_data["user"])

    user = await UserModel.get_or_none(telegram_id=user_data["user"]["id"])

    if not user:
        user = await UserModel.create(
            telegram_id=user_data["user"]["id"],
            first_name=user_data["user"]["first_name"],
            last_name=user_data["user"]["last_name"],
            language_code=user_data["user"]["language_code"],
        )

    user.web_app_data = user_data

    return user, shop
