-- upgrade --
CREATE UNIQUE INDEX "uid_shop_bot_tok_bdc8f6" ON "shop" ("bot_token");
-- downgrade --
DROP INDEX "idx_shop_bot_tok_bdc8f6";
