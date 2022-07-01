from typing import List, TypeVar

from tortoise.queryset import QuerySet

T = TypeVar('T')


async def from_queryset(cls: T, query_set: QuerySet) -> List[T]:
    pydantic_model = cls._pydantic_type
    res = await pydantic_model.from_queryset(query_set)
    return [cls.from_pydantic(i) for i in res]

