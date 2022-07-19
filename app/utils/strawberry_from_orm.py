from typing import List, Type
from strawberry.experimental.pydantic.conversion_types import (
    StrawberryTypeFromPydantic,
)

from tortoise.queryset import QuerySet, QuerySetSingle


async def from_queryset(
    cls: Type[StrawberryTypeFromPydantic],
    query_set: QuerySet,
    extra: dict = {},
) -> List[StrawberryTypeFromPydantic]:
    pydantic_model = cls._pydantic_type
    res = await pydantic_model.from_queryset(query_set)
    return [cls.from_pydantic(i, extra=extra) for i in res]


async def from_queryset_single(
    cls: Type[StrawberryTypeFromPydantic],
    query_set: QuerySetSingle,
    extra: dict = {},
) -> StrawberryTypeFromPydantic:
    pydantic_model = cls._pydantic_type
    res = await pydantic_model.from_queryset_single(query_set)
    return cls.from_pydantic(res, extra=extra)
