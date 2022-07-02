from typing import Tuple
from fastapi import Header, HTTPException

import json
from app.models.shop import ShopModel

from app.models.user import UserModel
from app.utils.check_web_app import check_webapp_signature


async def telegram_auth(
    shop_id: int, Authorization: str = Header()
) -> Tuple[UserModel, ShopModel]:
    shop = await ShopModel.get(id=shop_id)
    user_data = check_webapp_signature(shop.bot_token, Authorization)

    if not user_data:
        raise HTTPException(status_code=401, detail="Unauthorized")

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