from db_models.user import UserModel
from strawberry.types.info import Info
from tortoise.models import Model


def translation_field(root, info: Info) -> str:
    user: UserModel = info.context["user"]
    name = info.python_name
    if hasattr(root, f"{name}_{user.language_code}"):
        return getattr(root, f"{name}_{user.language_code}")
    return getattr(root, f"{name}_en", "")


def translate(obj: Model, name: str, user: UserModel):
    if hasattr(obj, f"{name}_{user.language_code}"):
        return getattr(obj, f"{name}_{user.language_code}")
    return getattr(obj, f"{name}_en", "")
