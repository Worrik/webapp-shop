from typing import List
import strawberry

from app.models.product import Product
from app.models.user import User


@strawberry.type
class Order:
    id: int
    user: User
    products: List[Product]


@strawberry.input
class OrderProduct:
    id: int
    val: int
