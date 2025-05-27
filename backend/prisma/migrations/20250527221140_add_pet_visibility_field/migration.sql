-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "visibility" TEXT NOT NULL DEFAULT 'visible';

-- CreateIndex
CREATE INDEX "Pet_visibility_idx" ON "Pet"("visibility");
