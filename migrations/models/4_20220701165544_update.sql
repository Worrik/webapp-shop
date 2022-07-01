-- upgrade --
CREATE TABLE IF NOT EXISTS "orders" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);;
CREATE TABLE IF NOT EXISTS "orders_products" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "amount" INT NOT NULL,
    "order_id" INT NOT NULL REFERENCES "orders" ("id") ON DELETE CASCADE,
    "product_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE
);;
ALTER TABLE "user" ALTER COLUMN "language_code" TYPE VARCHAR(20) USING "language_code"::VARCHAR(20);
-- downgrade --
DROP TABLE IF EXISTS "orders_products";
ALTER TABLE "user" ALTER COLUMN "language_code" TYPE VARCHAR(255) USING "language_code"::VARCHAR(255);
DROP TABLE IF EXISTS "orders";
