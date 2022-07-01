from typing import Optional
import strawberry
from app.core.models.base import TimestampModel
from tortoise import fields


class UserModel(TimestampModel):
    telegram_id = fields.BigIntField(unique=True)
    first_name = fields.CharField(max_length=255, null=True)
    last_name = fields.CharField(max_length=255, null=True)
    username = fields.CharField(max_length=255, null=True)
    language_code = fields.CharField(max_length=20, null=True)

    web_app_data: dict = {}

    class Meta:
        table = "user"


@strawberry.type
class User:
    telegram_id: int
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]
    language_code: Optional[str]
