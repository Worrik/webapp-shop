from typing import List
from strawberry.types import Info
from app.core.models.order import (
    Order,
    OrderModel,
    OrderProduct,
    OrderProductModel,
)
from app.core.models.product import ProductModel

from app.core.models.user import UserModel
from app.core.services.bot import send_order


async def create_order(info: Info, order_products: List[OrderProduct]) -> Order:
    user: UserModel = info.context["user"]
    order = await OrderModel.create(user=user)
    products_values = {p.id: p.val for p in order_products}
    products = await ProductModel.filter(id__in=products_values)
    order_products_objs = [
        OrderProductModel(
            order=order, product=product, amount=products_values[product.id]
        )
        for product in products
    ]
    await OrderProductModel.bulk_create(order_products_objs)
    await send_order(user, order_products_objs)
    return Order(
        id=order.id,
        user=user,
        products=products,
    )
