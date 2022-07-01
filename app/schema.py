from fastapi.param_functions import Depends
import strawberry

from strawberry.fastapi import GraphQLRouter
from app.auth import telegram_auth

from app.core.queries.shops import get_shops
from app.core.queries.products import get_products, get_products_by_ids, get_products_count
from app.core.mutations.shops import create_shop


async def get_context(user=Depends(telegram_auth)):
    return {"user": user}


@strawberry.type
class Query:
    shops = strawberry.field(resolver=get_shops)
    products = strawberry.field(resolver=get_products)
    products_by_ids = strawberry.field(resolver=get_products_by_ids)
    products_count = strawberry.field(resolver=get_products_count)


@strawberry.type
class Mutation:
    create_shop = strawberry.field(resolver=create_shop)


schema = strawberry.Schema(query=Query, mutation=Mutation)

graphql_app = GraphQLRouter(
    schema,
    context_getter=get_context
)
