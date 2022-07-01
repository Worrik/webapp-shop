import io
from typing import List
from app.core.models.order import OrderProductModel


def format_order(order_products: List[OrderProductModel]) -> str:
    res = io.StringIO("Order summary:\n")
    res.writelines(
        [
            f"{op.product.name} x{op.amount} — "
            f"{(op.product.price * op.amount):.2f}"
            for op in order_products
        ]
    )
    res.write(
        f"\nTotal — {sum([p.amount * p.product.price for p in order_products])}"
    )
    return res.getvalue()
