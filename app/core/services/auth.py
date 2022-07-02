from fastapi import Header, HTTPException
from app.config.config import TOKEN

import json

from app.core.models.user import UserModel
from app.utils.check_web_app import check_webapp_signature


async def telegram_auth(Authorization: str = Header()) -> UserModel:
    user_data = check_webapp_signature(TOKEN, Authorization)
    print(user_data)

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

    return user
