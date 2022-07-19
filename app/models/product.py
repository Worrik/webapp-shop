from enum import Enum
from typing import List, Optional
import strawberry

from tortoise.contrib.pydantic.creator import pydantic_model_creator
from db_models import ProductModel

from app.models.shop import CurrenciesEnum


Product_Pydantic = pydantic_model_creator(ProductModel, name="Product")


@strawberry.experimental.pydantic.type(model=Product_Pydantic, all_fields=True)
class Product:
    currency: CurrenciesEnum


@strawberry.enum
class SortByEnum(Enum):
    CREATED_AT = 'created_at'
    NAME = 'name'


@strawberry.input
class SortBy:
    field: SortByEnum
    desc: bool = False


@strawberry.input
class ProductFilters:
    search: Optional[str] = None
    sortBy: Optional[List[SortBy]] = None
