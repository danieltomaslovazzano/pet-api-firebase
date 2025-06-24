-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "defaultLanguage" TEXT NOT NULL DEFAULT 'en';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferredLanguage" TEXT NOT NULL DEFAULT 'en';
