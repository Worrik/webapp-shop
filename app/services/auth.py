from typing import Optional, Tuple
from starlette.requests import Request

import json
from app.models.shop import ShopModel

from db_models import UserModel
from app.utils.check_web_app import check_webapp_signature


async def telegram_auth(
    request: Request,
    shop_id: Optional[int] = None,
) -> Tuple[Optional[UserModel], ShopModel]:
    if shop_id:
        shop = await ShopModel.get(id=shop_id)
    else:
        shop = await ShopModel.first()

    Authorization = request.headers.get("Authorization", "")

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
