from typing import List
from fastapi_admin.app import FastAPIAdmin

from starlette.requests import Request

from fastapi_admin.resources import (
    Action,
    Dropdown,
    Field,
    Link,
    Model,
    ToolbarAction,
)
from fastapi_admin.widgets import displays, filters, inputs
from app.models.product import ProductModel
from app.models.shop import ShopModel

from app.models.user import AdminModel


class Dashboard(Link):
    label = "Dashboard"
    icon = "fas fa-home"
    url = "/admin"


class AdminResource(Model):
    label = "Admin"
    model = AdminModel
    icon = "fas fa-user"
    page_pre_title = "admin list"
    page_title = "admin model"
    filters = [
        filters.Search(
            name="username",
            label="Name",
            search_mode="contains",
            placeholder="Search for username",
        ),
        filters.Date(name="created_at", label="CreatedAt"),
    ]
    fields = [
        "id",
        "username",
        Field(
            name="password",
            label="Password",
            display=displays.InputOnly(),
            input_=inputs.Password(),
        ),
        "created_at",
    ]

    async def get_toolbar_actions(
        self, request: Request
    ) -> List[ToolbarAction]:
        return []

    async def cell_attributes(
        self, request: Request, obj: dict, field: Field
    ) -> dict:
        if field.name == "id":
            return {"class": "bg-danger text-white"}
        return await super().cell_attributes(request, obj, field)

    async def get_actions(self, request: Request) -> List[Action]:
        return []

    async def get_bulk_actions(self, request: Request) -> List[Action]:
        return []


class CategoryResource(Model):
    label = "Shop"
    model = ShopModel
    fields = [
        "name",
        "owner",
        Field(
            name="description",
            label="Description",
            display=displays.InputOnly(),
        ),
        Field(
            name="bot_token", label="Bot token", display=displays.InputOnly()
        ),
    ]


class ProductResource(Model):
    label = "Product"
    model = ProductModel
    fields = [
        "id",
        "shop",
        "name",
        "price",
        Field(
            name="description",
            label="Description",
            display=displays.InputOnly(),
        ),
        Field(
            name="image_url",
            label="Image",
            display=displays.Image(width="60"),
        ),
    ]


class Content(Dropdown):
    label = "Content"
    icon = "fas fa-bars"
    resources = [ProductResource, CategoryResource]


def register_admin(app: FastAPIAdmin):
    app.register(Dashboard)
    app.register(AdminResource)
    app.register(Content)
