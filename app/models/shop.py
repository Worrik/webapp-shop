import strawberry

from tortoise.contrib.pydantic.creator import pydantic_model_creator
from db_models import ShopModel


Shop_Pydantic = pydantic_model_creator(ShopModel, name="Shop")


@strawberry.experimental.pydantic.type(model=Shop_Pydantic, all_fields=True)
class Shop:
    pass


@strawberry.experimental.pydantic.input(model=Shop_Pydantic)
class ShopIn:
    name: strawberry.auto
    description: strawberry.auto
