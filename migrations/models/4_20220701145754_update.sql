-- upgrade --
CREATE TABLE IF NOT EXISTS "orders" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);;
ALTER TABLE "user" ALTER COLUMN "language_code" TYPE VARCHAR(20) USING "language_code"::VARCHAR(20);
CREATE TABLE "orders_product" ("productmodel_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE,"orders_id" INT NOT NULL REFERENCES "orders" ("id") ON DELETE CASCADE);
-- downgrade --
DROP TABLE IF EXISTS "orders_product";
ALTER TABLE "user" ALTER COLUMN "language_code" TYPE VARCHAR(255) USING "language_code"::VARCHAR(255);
DROP TABLE IF EXISTS "orders";
