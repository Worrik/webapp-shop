from app.core.models.shop import Shop, ShopIn, ShopModel


async def create_shop(shop: ShopIn) -> Shop:
    shop_obj = await ShopModel.create(
        name=shop.name, description=shop.description
    )
    return Shop.from_pydantic(shop_obj)
