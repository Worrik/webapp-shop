import strawberry

@strawberry.type
class NotFoundError:
    message: str
