-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "createdBy" TEXT;

-- CreateIndex
CREATE INDEX "Organization_createdBy_idx" ON "Organization"("createdBy");
