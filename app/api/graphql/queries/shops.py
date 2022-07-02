from typing import List
from app.models.shop import ShopModel, Shop
from app.utils.strawberry_from_orm import from_queryset


async def get_shops() -> List[Shop]:
    return await from_queryset(Shop, ShopModel.all())
