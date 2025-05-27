-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'direct';

-- CreateIndex
CREATE INDEX "Conversation_type_idx" ON "Conversation"("type");
