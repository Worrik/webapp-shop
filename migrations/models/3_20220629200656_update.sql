-- upgrade --
ALTER TABLE "product" RENAME COLUMN "imageUrl" TO "image_url";
-- downgrade --
ALTER TABLE "product" RENAME COLUMN "image_url" TO "imageUrl";
