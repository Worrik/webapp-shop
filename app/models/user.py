from typing import Optional
import strawberry


@strawberry.type
class User:
    telegram_id: int
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]
    language_code: Optional[str]
