import strawberry
from tortoise import fields

from app.core.models.base import TimestampModel
from tortoise.contrib.pydantic.creator import pydantic_model_creator


class ShopModel(TimestampModel):
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    owner = fields.ForeignKeyField("models.UserModel", related_name="shops")

    class Meta:
        table = "shop"

    class PydanticMeta:
        exclude = ("created_at", "updated_at")


Shop_Pydantic = pydantic_model_creator(ShopModel, name="Shop")


@strawberry.experimental.pydantic.type(model=Shop_Pydantic, all_fields=True)
class Shop:
    pass


@strawberry.experimental.pydantic.input(model=Shop_Pydantic)
class ShopIn:
    name: strawberry.auto
    description: strawberry.auto
