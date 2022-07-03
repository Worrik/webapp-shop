from typing import List, Optional

from app.models.product import Product, ProductModel
from app.utils.strawberry_from_orm import from_queryset


async def get_products(
    shop_id: Optional[int] = None, page: int = 1, per_page: int = 10
) -> List[Product]:
    query = ProductModel.all()

    if shop_id:
        query = query.filter(shop__id=shop_id)

    return await from_queryset(
        Product,
        query.limit(per_page).offset((page - 1) * per_page),
    )


async def get_products_by_ids(ids: List[int]) -> List[Product]:
    return await from_queryset(Product, ProductModel.filter(id__in=ids))


async def get_products_count(shop_id: Optional[int] = None) -> int:
    query = ProductModel.all()

    if shop_id:
        query = query.filter(shop__id=shop_id)

    return await query.count()
