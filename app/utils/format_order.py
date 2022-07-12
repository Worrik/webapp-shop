import io
from typing import List
from db_models import OrderProductModel


def format_order(order_products: List[OrderProductModel]) -> str:
    res = io.StringIO()
    res.write("Order summary:\n\n")
    res.writelines(
        [
            f"{op.product.name} x{op.amount} — "
            f"<b>${(op.product.price * op.amount):.2f}</b>\n"
            for op in order_products
        ]
    )
    total = sum([p.amount * p.product.price for p in order_products])
    res.write(f"\nTotal — <b>${total:.2f}</b>")
    return res.getvalue()
