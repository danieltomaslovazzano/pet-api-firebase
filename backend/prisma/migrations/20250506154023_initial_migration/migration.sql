/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `invitedById` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `permissions` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `description_en` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `description_es` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Pet` table. All the data in the column will be lost.
  - The `location` column on the `Pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `authMethod` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `locale` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilePhoto` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ApiKey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ApiRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserBlock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConversationBlockedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConversationDeletedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConversationHiddenBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConversationParticipants` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ApiRequest" DROP CONSTRAINT "ApiRequest_apiKeyId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_invitedById_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserBlock" DROP CONSTRAINT "UserBlock_blockedId_fkey";

-- DropForeignKey
ALTER TABLE "UserBlock" DROP CONSTRAINT "UserBlock_blockerId_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationBlockedBy" DROP CONSTRAINT "_ConversationBlockedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationBlockedBy" DROP CONSTRAINT "_ConversationBlockedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationDeletedBy" DROP CONSTRAINT "_ConversationDeletedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationDeletedBy" DROP CONSTRAINT "_ConversationDeletedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationHiddenBy" DROP CONSTRAINT "_ConversationHiddenBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationHiddenBy" DROP CONSTRAINT "_ConversationHiddenBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationParticipants" DROP CONSTRAINT "_ConversationParticipants_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationParticipants" DROP CONSTRAINT "_ConversationParticipants_B_fkey";

-- DropIndex
DROP INDEX "Conversation_createdAt_idx";

-- DropIndex
DROP INDEX "Membership_invitedById_idx";

-- DropIndex
DROP INDEX "Membership_joinedAt_idx";

-- DropIndex
DROP INDEX "Message_userId_idx";

-- DropIndex
DROP INDEX "Organization_createdAt_idx";

-- DropIndex
DROP INDEX "Organization_createdById_idx";

-- DropIndex
DROP INDEX "Organization_name_idx";

-- DropIndex
DROP INDEX "Organization_role_idx";

-- DropIndex
DROP INDEX "Pet_createdAt_idx";

-- DropIndex
DROP INDEX "Pet_name_idx";

-- DropIndex
DROP INDEX "Pet_organizationId_idx";

-- DropIndex
DROP INDEX "Pet_userId_idx";

-- DropIndex
DROP INDEX "User_createdAt_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- DropIndex
DROP INDEX "User_role_idx";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "updatedAt",
ADD COLUMN     "lastMessageAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "invitedById",
DROP COLUMN "joinedAt",
DROP COLUMN "permissions",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "userId",
ADD COLUMN     "attachments" JSONB,
ADD COLUMN     "location" JSONB,
ADD COLUMN     "senderId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'sent';

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "createdById",
DROP COLUMN "role",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "description_en",
DROP COLUMN "description_es",
DROP COLUMN "organizationId",
DROP COLUMN "userId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "ownerId" TEXT,
ALTER COLUMN "status" DROP DEFAULT,
DROP COLUMN "location",
ADD COLUMN     "location" JSONB;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "authMethod",
DROP COLUMN "locale",
DROP COLUMN "profilePhoto",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "blockedUsers" TEXT[],
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "ApiKey";

-- DropTable
DROP TABLE "ApiRequest";

-- DropTable
DROP TABLE "UserBlock";

-- DropTable
DROP TABLE "_ConversationBlockedBy";

-- DropTable
DROP TABLE "_ConversationDeletedBy";

-- DropTable
DROP TABLE "_ConversationHiddenBy";

-- DropTable
DROP TABLE "_ConversationParticipants";

-- CreateTable
CREATE TABLE "_UserConversations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserConversations_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserConversations_B_index" ON "_UserConversations"("B");

-- CreateIndex
CREATE INDEX "Conversation_status_idx" ON "Conversation"("status");

-- CreateIndex
CREATE INDEX "Conversation_lastMessageAt_idx" ON "Conversation"("lastMessageAt");

-- CreateIndex
CREATE INDEX "Membership_status_idx" ON "Membership"("status");

-- CreateIndex
CREATE INDEX "Message_senderId_idx" ON "Message"("senderId");

-- CreateIndex
CREATE INDEX "Message_status_idx" ON "Message"("status");

-- CreateIndex
CREATE INDEX "Organization_status_idx" ON "Organization"("status");

-- CreateIndex
CREATE INDEX "Pet_ownerId_idx" ON "Pet"("ownerId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserConversations" ADD CONSTRAINT "_UserConversations_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserConversations" ADD CONSTRAINT "_UserConversations_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
