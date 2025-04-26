/*
  Warnings:

  - You are about to drop the `TestConnection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TestConnection";

-- CreateIndex
CREATE INDEX "Conversation_createdAt_idx" ON "Conversation"("createdAt");

-- CreateIndex
CREATE INDEX "Membership_role_idx" ON "Membership"("role");

-- CreateIndex
CREATE INDEX "Membership_joinedAt_idx" ON "Membership"("joinedAt");

-- CreateIndex
CREATE INDEX "Message_timestamp_idx" ON "Message"("timestamp");

-- CreateIndex
CREATE INDEX "Organization_role_idx" ON "Organization"("role");

-- CreateIndex
CREATE INDEX "Organization_createdAt_idx" ON "Organization"("createdAt");

-- CreateIndex
CREATE INDEX "Organization_name_idx" ON "Organization"("name");

-- CreateIndex
CREATE INDEX "Pet_status_idx" ON "Pet"("status");

-- CreateIndex
CREATE INDEX "Pet_species_idx" ON "Pet"("species");

-- CreateIndex
CREATE INDEX "Pet_createdAt_idx" ON "Pet"("createdAt");

-- CreateIndex
CREATE INDEX "Pet_name_idx" ON "Pet"("name");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE INDEX "UserBlock_createdAt_idx" ON "UserBlock"("createdAt");
