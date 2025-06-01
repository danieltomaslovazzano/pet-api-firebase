-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'shelter';

-- CreateIndex
CREATE INDEX "Organization_type_idx" ON "Organization"("type");
