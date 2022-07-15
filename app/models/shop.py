from db_models.shop import Currencies
from tortoise.contrib.pydantic.creator import pydantic_model_creator
from db_models import ShopModel

import strawberry

from app.utils.translation import translation_field


_Shop_Pydantic = pydantic_model_creator(
    ShopModel, name="Shop", exclude=("currency",)
)


class Shop_Pydantic(_Shop_Pydantic):
    currency: Currencies


CurrenciesEnum = strawberry.enum(Currencies)


@strawberry.experimental.pydantic.type(model=Shop_Pydantic)
class Shop:
    id: int

    name = strawberry.field(resolver=translation_field)
    name_en: str
    name_uk: str

    description = strawberry.field(resolver=translation_field)
    description_en: str
    description_uk: str

    currency: CurrenciesEnum


@strawberry.experimental.pydantic.input(model=Shop_Pydantic)
class ShopIn:
    name: strawberry.auto
    description: strawberry.auto
    bot_token: strawberry.auto
