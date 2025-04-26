/*
  Warnings:

  - You are about to drop the column `blockedBy` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `hiddenBy` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `readBy` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ConversationParticipant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ReceivedMessages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ConversationParticipant" DROP CONSTRAINT "ConversationParticipant_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "ConversationParticipant" DROP CONSTRAINT "ConversationParticipant_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationMember" DROP CONSTRAINT "OrganizationMember_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationMember" DROP CONSTRAINT "OrganizationMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ReceivedMessages" DROP CONSTRAINT "_ReceivedMessages_A_fkey";

-- DropForeignKey
ALTER TABLE "_ReceivedMessages" DROP CONSTRAINT "_ReceivedMessages_B_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "blockedBy",
DROP COLUMN "deletedBy",
DROP COLUMN "hiddenBy";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "createdAt",
DROP COLUMN "readBy",
DROP COLUMN "senderId",
DROP COLUMN "updatedAt",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "logo",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'shelter';

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "description",
ADD COLUMN     "description_en" TEXT,
ADD COLUMN     "description_es" TEXT,
ADD COLUMN     "organizationId" TEXT,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'available',
ALTER COLUMN "location" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
DROP COLUMN "lastLoginAt",
DROP COLUMN "phoneVerified",
DROP COLUMN "status",
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "ConversationParticipant";

-- DropTable
DROP TABLE "OrganizationMember";

-- DropTable
DROP TABLE "_ReceivedMessages";

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "permissions" TEXT[],
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "invitedById" TEXT NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConversationParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ConversationParticipants_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ConversationBlockedBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ConversationBlockedBy_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ConversationDeletedBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ConversationDeletedBy_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ConversationHiddenBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ConversationHiddenBy_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "Membership_userId_idx" ON "Membership"("userId");

-- CreateIndex
CREATE INDEX "Membership_organizationId_idx" ON "Membership"("organizationId");

-- CreateIndex
CREATE INDEX "Membership_invitedById_idx" ON "Membership"("invitedById");

-- CreateIndex
CREATE UNIQUE INDEX "Membership_userId_organizationId_key" ON "Membership"("userId", "organizationId");

-- CreateIndex
CREATE INDEX "_ConversationParticipants_B_index" ON "_ConversationParticipants"("B");

-- CreateIndex
CREATE INDEX "_ConversationBlockedBy_B_index" ON "_ConversationBlockedBy"("B");

-- CreateIndex
CREATE INDEX "_ConversationDeletedBy_B_index" ON "_ConversationDeletedBy"("B");

-- CreateIndex
CREATE INDEX "_ConversationHiddenBy_B_index" ON "_ConversationHiddenBy"("B");

-- CreateIndex
CREATE INDEX "Message_conversationId_idx" ON "Message"("conversationId");

-- CreateIndex
CREATE INDEX "Message_userId_idx" ON "Message"("userId");

-- CreateIndex
CREATE INDEX "Organization_createdById_idx" ON "Organization"("createdById");

-- CreateIndex
CREATE INDEX "Pet_userId_idx" ON "Pet"("userId");

-- CreateIndex
CREATE INDEX "Pet_organizationId_idx" ON "Pet"("organizationId");

-- CreateIndex
CREATE INDEX "UserBlock_blockerId_idx" ON "UserBlock"("blockerId");

-- CreateIndex
CREATE INDEX "UserBlock_blockedId_idx" ON "UserBlock"("blockedId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationParticipants" ADD CONSTRAINT "_ConversationParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationParticipants" ADD CONSTRAINT "_ConversationParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationBlockedBy" ADD CONSTRAINT "_ConversationBlockedBy_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationBlockedBy" ADD CONSTRAINT "_ConversationBlockedBy_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationDeletedBy" ADD CONSTRAINT "_ConversationDeletedBy_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationDeletedBy" ADD CONSTRAINT "_ConversationDeletedBy_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationHiddenBy" ADD CONSTRAINT "_ConversationHiddenBy_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationHiddenBy" ADD CONSTRAINT "_ConversationHiddenBy_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
