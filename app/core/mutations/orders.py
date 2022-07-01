from typing import List
from strawberry.types import Info
from app.core.models.order import Order, OrderModel
from app.core.models.product import Product, ProductModel

from app.core.models.user import User, UserModel


async def create_order(info: Info, products_ids: List[int]) -> Order:
    print(info.context)
    user: UserModel = info.context["user"]
    products = await ProductModel.filter(id__in=products_ids)
    order = await OrderModel.create(user=user, products=products)
    return Order(
        id=order.id,
        user=User(**dict(user)),
        products=[Product(**dict(product)) for product in products],
    )
