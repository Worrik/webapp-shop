from typing import List
import strawberry
from tortoise import fields

from app.core.models.base import TimestampModel
from app.core.models.product import Product
from app.core.models.user import User


class OrderModel(TimestampModel):
    user = fields.ForeignKeyField(
        "models.UserModel",
        related_name="orders",
        on_delete=fields.CASCADE,
        null=False,
    )
    products = fields.ManyToManyField(
        "models.ProductModel", related_name="orders"
    )

    class Meta:
        table = "orders"


@strawberry.type
class Order:
    id: int
    user: User
    products: List[Product]
