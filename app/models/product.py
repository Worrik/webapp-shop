import strawberry
from tortoise import fields

from app.models.base import TimestampModel
from tortoise.contrib.pydantic.creator import pydantic_model_creator


class ProductModel(TimestampModel):
    shop = fields.ForeignKeyField('models.ShopModel')
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    price = fields.DecimalField(max_digits=10, decimal_places=2)
    quantity = fields.IntField(null=True)
    image_url = fields.TextField(null=True)

    class Meta:
        table = "product"

    class PydanticMeta:
        exclude = ("created_at", "updated_at")


Product_Pydantic = pydantic_model_creator(ProductModel, name="Product")


@strawberry.experimental.pydantic.type(model=Product_Pydantic, all_fields=True)
class Product:
    pass
