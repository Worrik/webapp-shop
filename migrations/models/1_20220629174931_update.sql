-- upgrade --
ALTER TABLE "user" DROP COLUMN "is_bot";
ALTER TABLE "user" ALTER COLUMN "language_code" DROP NOT NULL;
ALTER TABLE "user" ALTER COLUMN "username" DROP NOT NULL;
ALTER TABLE "user" ALTER COLUMN "last_name" DROP NOT NULL;
ALTER TABLE "user" ALTER COLUMN "first_name" DROP NOT NULL;
-- downgrade --
ALTER TABLE "user" ADD "is_bot" BOOL NOT NULL  DEFAULT False;
ALTER TABLE "user" ALTER COLUMN "language_code" SET NOT NULL;
ALTER TABLE "user" ALTER COLUMN "username" SET NOT NULL;
ALTER TABLE "user" ALTER COLUMN "last_name" SET NOT NULL;
ALTER TABLE "user" ALTER COLUMN "first_name" SET NOT NULL;
