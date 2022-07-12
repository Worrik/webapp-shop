import datetime
from typing import Optional
import strawberry
from tortoise import fields
from fastapi_admin.models import AbstractAdmin


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
