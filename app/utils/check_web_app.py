import hashlib
import hmac
from operator import itemgetter
from typing import Optional
from urllib.parse import parse_qsl


def check_webapp_signature(token: str, init_data: str) -> Optional[dict]:
    """
    Check incoming WebApp init data signature
    :param token: bot Token
    :param init_data: data from frontend to be validated
    :return:
    """
    try:
        parsed_data = dict(parse_qsl(init_data, strict_parsing=True))
    except ValueError:  # pragma: no cover
        # Init data is not a valid query string
        return
    if "hash" not in parsed_data:
        # Hash is not present in init data
        return
    parsed_data.pop("hash")

    data_check_string = "\n".join(
        f"{k}={v}" for k, v in sorted(parsed_data.items(), key=itemgetter(0))
    )
    secret_key = hmac.new(
        key=b"WebAppData", msg=token.encode(), digestmod=hashlib.sha256
    )
    hmac.new(
        key=secret_key.digest(),
        msg=data_check_string.encode(),
        digestmod=hashlib.sha256,
    ).hexdigest()
    return parsed_data
