-- upgrade --
CREATE TABLE IF NOT EXISTS "admins" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "username" VARCHAR(50) NOT NULL UNIQUE,
    "password" VARCHAR(200) NOT NULL,
    "last_login" TIMESTAMPTZ NOT NULL,
    "email" VARCHAR(200) NOT NULL  DEFAULT '',
    "intro" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON COLUMN "admins"."last_login" IS 'Last Login';;
ALTER TABLE "product" DROP COLUMN "quantity";
-- downgrade --
ALTER TABLE "product" ADD "quantity" INT;
DROP TABLE IF EXISTS "admins";
