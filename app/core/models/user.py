from app.core.models.base import TimestampModel
from tortoise import fields


class UserModel(TimestampModel):
    telegram_id = fields.BigIntField(unique=True)
    first_name = fields.CharField(max_length=255, null=True)
    last_name = fields.CharField(max_length=255, null=True)
    username = fields.CharField(max_length=255, null=True)
    language_code = fields.CharField(max_length=255, null=True)

    class Meta:
        table = "user"
