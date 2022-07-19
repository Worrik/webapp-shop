from typing import Optional, Type
from db_models.user import UserModel
from strawberry.types.info import Info
from tortoise.models import Model


def translation_field(root, info: Info) -> str:
    user: Optional[UserModel] = info.context.get("user")
    name = info.python_name
    default = getattr(root, f"{name}_en", "")

    if not user:
        return default

    if hasattr(root, f"{name}_{user.language_code}"):
        return getattr(root, f"{name}_{user.language_code}")

    return default


def translate(obj: Model, name: str, user: UserModel):
    if hasattr(obj, f"{name}_{user.language_code}"):
        return getattr(obj, f"{name}_{user.language_code}")
    return getattr(obj, f"{name}_en", "")


def get_locale_field(
    model: Type[Model], name: str, user: Optional[UserModel] = None
) -> str:
    if not user:
        return f"{name}_en"
    if hasattr(model, f"{name}_{user.language_code}"):
        return getattr(model, f"{name}_{user.language_code}")
    return f"{name}_en"
