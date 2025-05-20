const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getOrgByName(name) {
  return await prisma.organization.findFirst({ where: { name } });
}

async function getUserByEmail(email) {
  return await prisma.user.findFirst({ where: { email } });
}

async function getFirstNOrgs(n) {
  return await prisma.organization.findMany({ orderBy: { createdAt: 'asc' }, take: n });
}

async function createOrg(name) {
  return await prisma.organization.create({ data: { name } });
}

async function deleteOrgByName(name) {
  return await prisma.organization.deleteMany({ where: { name } });
}

module.exports = { getOrgByName, getUserByEmail, getFirstNOrgs, createOrg, deleteOrgByName }; 