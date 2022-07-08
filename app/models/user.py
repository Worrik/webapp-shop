import datetime
from typing import Optional
import strawberry
from app.models.base import TimestampModel
from tortoise import fields
from fastapi_admin.models import AbstractAdmin


class UserModel(TimestampModel):
    telegram_id = fields.BigIntField(unique=True)
    first_name = fields.CharField(max_length=255, null=True)
    last_name = fields.CharField(max_length=255, null=True)
    username = fields.CharField(max_length=255, null=True)
    language_code = fields.CharField(max_length=20, null=True)

    is_admin = fields.BooleanField(default=False)

    web_app_data: dict = {}

    def __str__(self) -> str:
        return f"{self.telegram_id}: {self.first_name} {self.last_name or ''}"

    class Meta:
        table = "user"


@strawberry.type
class User:
    telegram_id: int
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]
    language_code: Optional[str]


class AdminModel(AbstractAdmin):
    last_login = fields.DatetimeField(
        description="Last Login", default=datetime.datetime.now
    )
    email = fields.CharField(max_length=200, default="")
    intro = fields.TextField(default="")
    created_at = fields.DatetimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.pk}#{self.username}"

    class Meta:
        table = "admins"
