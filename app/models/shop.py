from db_models.shop import Currencies
import strawberry

from tortoise.contrib.pydantic.creator import pydantic_model_creator
from db_models import ShopModel


_Shop_Pydantic = pydantic_model_creator(
    ShopModel, name="Shop", exclude=("currency",)
)


class Shop_Pydantic(_Shop_Pydantic):
    currency: Currencies


CurrenciesEnum = strawberry.enum(Currencies)


@strawberry.experimental.pydantic.type(model=Shop_Pydantic)
class Shop:
    id: int
    name: str
    description: str
    bot_token: str
    currency: CurrenciesEnum


@strawberry.experimental.pydantic.input(model=Shop_Pydantic)
class ShopIn:
    name: strawberry.auto
    description: strawberry.auto
