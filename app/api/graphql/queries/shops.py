from typing import List, Optional
from db_models.user import UserModel

from strawberry.types.info import Info
from app.models.shop import ShopModel, Shop
from app.utils.strawberry_from_orm import from_queryset, from_queryset_single


async def get_shops() -> List[Shop]:
    return await from_queryset(Shop, ShopModel.all())


async def get_my_shops(info: Info) -> List[Shop]:
    user: Optional[UserModel] = info.context.get("user")
    return await from_queryset(Shop, ShopModel.filter(owner=user))


async def get_shop_by_id(id: int, info: Info) -> Shop:
    user: Optional[UserModel] = info.context.get("user")
    return await from_queryset_single(
        Shop, ShopModel.get_or_none(id=id, owner=user)
    )
