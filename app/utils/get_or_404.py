from typing import Type, TypeVar
from fastapi import HTTPException
from tortoise.models import Model

T = TypeVar("T", bound=Model)


async def get_or_404(model: Type[T], **kwargs) -> T:
    obj = await model.get_or_none(**kwargs)

    if not obj:
        raise HTTPException(status_code=404, detail="Not found")

    return obj
