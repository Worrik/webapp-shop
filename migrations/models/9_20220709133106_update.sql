-- upgrade --
ALTER TABLE "user" ADD "is_bot" BOOL NOT NULL  DEFAULT False;
-- downgrade --
ALTER TABLE "user" DROP COLUMN "is_bot";
