from typing import List
from aiogram.client.bot import Bot
from strawberry.types import Info
from app.models.order import (
    Order,
    OrderModel,
    OrderProduct,
    OrderProductModel,
)
from app.models.product import ProductModel
from app.models.shop import ShopModel

from app.models.user import UserModel
from app.bot.commands import send_order


async def create_order(info: Info, order_products: List[OrderProduct]) -> Order:
    user: UserModel = info.context["user"]
    shop: ShopModel = info.context["shop"]

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

    await send_order(Bot(token=shop.bot_token), user, order_products_objs)

    return Order(
        id=order.id,
        user=user,
        products=products,
    )
