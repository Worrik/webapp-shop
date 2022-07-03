from typing import List

from strawberry.types.info import Info

from app.models.product import Product, ProductModel
from app.models.shop import ShopModel
from app.utils.strawberry_from_orm import from_queryset


async def get_products(
    info: Info, page: int = 1, per_page: int = 10
) -> List[Product]:
    shop: ShopModel = info.context["shop"]

    return await from_queryset(
        Product,
        shop.products.limit(per_page).offset((page - 1) * per_page),
    )


async def get_products_by_ids(ids: List[int]) -> List[Product]:
    return await from_queryset(Product, ProductModel.filter(id__in=ids))


async def get_products_count(info: Info) -> int:
    shop: ShopModel = info.context["shop"]
    return await shop.products.count()
