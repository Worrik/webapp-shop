-- upgrade --
ALTER TABLE "product" ADD "shop_id" INT NOT NULL;
ALTER TABLE "shop" ADD "bot_token" VARCHAR(50) NOT NULL;
ALTER TABLE "product" ADD CONSTRAINT "fk_product_shop_6b5a33a6" FOREIGN KEY ("shop_id") REFERENCES "shop" ("id") ON DELETE CASCADE;
-- downgrade --
ALTER TABLE "product" DROP CONSTRAINT "fk_product_shop_6b5a33a6";
ALTER TABLE "shop" DROP COLUMN "bot_token";
ALTER TABLE "product" DROP COLUMN "shop_id";
