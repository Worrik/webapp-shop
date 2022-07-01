from typing import List
from strawberry.types import Info
from app.core.models.order import Order, OrderModel, OrderProduct, OrderProductModel

from app.core.models.user import UserModel


async def create_order(info: Info, order_products: List[OrderProduct]) -> Order:
    user: UserModel = info.context["user"]
    order = await OrderModel.create(user=user)
    await OrderProductModel.bulk_create([
        OrderProductModel(order=order, product=product.id, amount=product.val)
        for product in order_products
    ])
    return Order(
        id=order.id,
        user=user,
        products=order.products.all(),
    )
