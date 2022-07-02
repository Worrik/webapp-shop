from fastapi.param_functions import Depends
import strawberry

from strawberry.fastapi import GraphQLRouter
from app.services.auth import telegram_auth
from .mutations.orders import create_order

from .queries.shops import get_shops
from .queries.products import get_products, get_products_by_ids, get_products_count


async def get_context(user_shop=Depends(telegram_auth)):
    user, shop = user_shop
    return {"user": user, "shop": shop}


@strawberry.type
class Query:
    shops = strawberry.field(resolver=get_shops)
    products = strawberry.field(resolver=get_products)
    products_by_ids = strawberry.field(resolver=get_products_by_ids)
    products_count = strawberry.field(resolver=get_products_count)


@strawberry.type
class Mutation:
    create_order = strawberry.field(resolver=create_order)


schema = strawberry.Schema(query=Query, mutation=Mutation)

graphql_app = GraphQLRouter(
    schema,
    context_getter=get_context
)
