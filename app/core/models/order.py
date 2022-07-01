from typing import List
import strawberry
from tortoise import fields

from app.core.models.base import BaseModel, TimestampModel
from app.core.models.product import Product
from app.core.models.user import User


class OrderProductModel(BaseModel):
    order = fields.ForeignKeyField(
        "models.OrderModel", on_delete=fields.CASCADE
    )
    product = fields.ForeignKeyField(
        "models.ProductModel", on_delete=fields.CASCADE
    )
    amount = fields.IntField()

    class Meta:
        table = "orders_products"


class OrderModel(TimestampModel):
    user = fields.ForeignKeyField(
        "models.UserModel",
        related_name="orders",
        on_delete=fields.CASCADE,
        null=False,
    )
    products = fields.ManyToManyField(
        "models.ProductModel",
        related_name="orders",
        through="orders_products",
        backward_key="order_id",
        forward_key="product_id",
    )

    class Meta:
        table = "orders"


@strawberry.type
class Order:
    id: int
    user: User
    products: List[Product]


@strawberry.type
class OrderProduct:
    id: int
    val: int
