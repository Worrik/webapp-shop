from typing import Optional, Union
from db_models.shop import ShopModel
from db_models.user import UserModel
from strawberry.types.info import Info

from app.models.errors import NotFoundError
from app.models.shop import Shop, ShopIn


async def update_shop(id: int, info: Info, shop: ShopIn) -> Union[Shop, NotFoundError]:
    user: Optional[UserModel] = info.context.get("user")
    shop_obj = await ShopModel.get_or_none(id=id, owner=user)

    if not shop_obj:
        return NotFoundError(message="Shop not found")

    shop_obj.name_en = shop.name_en or shop_obj.name_en
    shop_obj.name_uk = shop.name_uk or shop_obj.name_uk
    shop_obj.description_en = shop.description_en or shop_obj.description_en
    shop_obj.description_uk = shop.description_uk or shop_obj.description_uk
    shop_obj.currency = shop.currency or shop_obj.currency

    await shop_obj.save()

    return Shop(
        id=shop_obj.id,
        name_en=shop_obj.name_en,
        name_uk=shop_obj.name_uk,
        description_en=shop_obj.description_en,
        description_uk=shop_obj.description_uk,
        currency=shop_obj.currency,
    )
