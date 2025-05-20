// tests/setup/testHelpers.js
// Helpers para setup y teardown de tests de integración multitenant

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const admin = require('../../config/firebase'); // Ajusta la ruta si es necesario
const request = require('supertest');
const app = require('../../app'); // Ajusta si es necesario

async function setupTestDb() {
  // Limpia todas las tablas relevantes
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.pet.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();
  console.log('[setupTestDb] Base de datos de test preparada');
}

async function teardownTestDb() {
  // Limpia todas las tablas relevantes
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.pet.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.$disconnect();
  console.log('[teardownTestDb] Base de datos de test limpiada');
}

async function createTestOrg({ name }) {
  const org = await prisma.organization.create({
    data: { name, status: 'active' }
  });
  return org;
}

async function createTestUser({ email, password, organizationId, isSuperAdmin }) {
  // Eliminar usuario si ya existe en Firebase Auth
  try {
    const existingUser = await admin.auth().getUserByEmail(email);
    if (existingUser) {
      await admin.auth().deleteUser(existingUser.uid);
    }
  } catch (err) {
    // Si el usuario no existe, ignorar el error
    if (err.code !== 'auth/user-not-found') throw err;
  }
  // Crea usuario en Firebase Auth
  const userRecord = await admin.auth().createUser({
    email,
    password,
    displayName: email.split('@')[0],
    emailVerified: true
  });
  if (isSuperAdmin) {
    await admin.auth().setCustomUserClaims(userRecord.uid, { isSuperAdmin: true });
  }

  // Crea usuario en la base de datos
  const user = await prisma.user.create({
    data: {
      id: userRecord.uid,
      email,
      role: isSuperAdmin ? 'superadmin' : 'user',
      isSuperAdmin: !!isSuperAdmin,
      status: 'active'
    }
  });

  // Crea membresía si corresponde
  if (organizationId) {
    await prisma.membership.create({
      data: {
        userId: user.id,
        organizationId,
        role: isSuperAdmin ? 'admin' : 'member'
      }
    });
  }

  return user;
}

async function loginTestUser(email, password) {
  const res = await request(app)
    .post('/api/auth/login')
    .send({ email, password });
  if (res.status !== 200) {
    console.error('[loginTestUser] Login failed:', { status: res.status, body: res.body });
    throw new Error('Login failed');
  }
  return res.body.tokens?.idToken || res.body.token || res.body.accessToken;
}

module.exports = {
  setupTestDb,
  teardownTestDb,
  createTestOrg,
  createTestUser,
  loginTestUser
}; 