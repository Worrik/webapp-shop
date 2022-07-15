from typing import List
from db_models.user import UserModel
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
from db_models import OrderModel, ProductModel, ShopModel, AdminModel


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


class ShopResource(Model):
    label = "Shops"
    model = ShopModel
    fields = [
        "name_en",
        "name_uk",
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
    label = "Products"
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


class UserResource(Model):
    label = "Users"
    model = UserModel


class OrderResource(Model):
    label = "Orders"
    model = OrderModel
    fields = [
        "id",
        "user"
    ]


class Content(Dropdown):
    label = "Content"
    icon = "fas fa-bars"
    resources = [ProductResource, ShopResource, OrderResource, UserResource]


def register_admin(app: FastAPIAdmin):
    app.register(Dashboard)
    app.register(AdminResource)
    app.register(Content)
