from typing import List, Optional

from app.core.models.product import Product, ProductModel
from app.utils.strawberry_from_orm import from_queryset


async def get_products(page: int = 1, per_page: int = 10) -> List[Product]:
    return await from_queryset(
        Product,
        ProductModel.all().limit(per_page).offset((page - 1) * per_page),
    )


async def get_products_by_ids(ids: List[int]) -> List[Product]:
    return await from_queryset(Product, ProductModel.filter(id__in=ids))


async def get_products_count() -> int:
    return await ProductModel.all().count()
