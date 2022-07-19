from typing import List, Optional

from strawberry.types.info import Info
from tortoise.functions import Lower

from app.models.product import Product, ProductFilters, ProductModel
from app.utils.strawberry_from_orm import from_queryset, from_queryset_single
from app.utils.get_or_404 import get_or_404
from app.utils.translation import get_locale_field

from db_models import ShopModel, UserModel


async def get_products(
    info: Info, page: int = 1, per_page: int = 10
) -> List[Product]:
    shop: ShopModel = info.context["shop"]

    return await from_queryset(
        Product,
        shop.products.limit(per_page).offset((page - 1) * per_page),
        extra={"currency": shop.currency},
    )


async def get_products_by_ids(ids: List[int]) -> List[Product]:
    return await from_queryset(Product, ProductModel.filter(id__in=ids))


async def get_products_count(info: Info) -> int:
    shop: ShopModel = info.context["shop"]
    return await shop.products.all().count()


async def get_product_by_id(id: int) -> Product:
    return await from_queryset_single(Product, ProductModel.get(id=id))


async def get_my_shop_products(
    shop_id: int, info: Info, filters: Optional[ProductFilters] = None
) -> List[Product]:
    user: Optional[UserModel] = info.context["user"]
    shop = await get_or_404(ShopModel, id=shop_id, owner=user)
    query = shop.products.all()

    if filters:
        filter_kwargs = {}
        aliases_kwargs = {}

        if filters.search:
            field_name = get_locale_field(ShopModel, "name", user)
            aliases_kwargs["search_name"] = Lower(field_name)
            value = filters.search.strip().lower()
            filter_kwargs["search_name__icontains"] = value

        if aliases_kwargs:
            query = query.annotate(**aliases_kwargs)

        if filter_kwargs:
            query = query.filter(**filter_kwargs)

    return await from_queryset(Product, query)
