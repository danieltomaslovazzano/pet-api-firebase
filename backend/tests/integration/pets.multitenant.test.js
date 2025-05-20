const request = require('supertest');
const app = require('../../app'); // Asegúrate de exportar tu app Express correctamente
const {
  setupTestDb,
  teardownTestDb,
  createTestUser,
  createTestOrg,
  loginTestUser
} = require('../setup/testHelpers');

describe('Multitenant Pets API', () => {
  let orgA, orgB, userA, userB, superadmin, tokenA, tokenB, tokenSuperadmin, petA, petB;
  const IMAGE_URL = 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg';

  beforeAll(async () => {
    await setupTestDb();

    // Crear organizaciones
    orgA = await createTestOrg({ name: 'OrgA' });
    orgB = await createTestOrg({ name: 'OrgB' });
    console.log('Organizaciones creadas:', orgA.name, orgB.name);

    // Crear usuarios
    userA = await createTestUser({ email: 'userA@example.com', password: 'test123', organizationId: orgA.id });
    userB = await createTestUser({ email: 'userB@example.com', password: 'test123', organizationId: orgB.id });
    superadmin = await createTestUser({ email: 'superadmin@example.com', password: 'test123', isSuperAdmin: true });
    console.log('Usuarios creados:', userA.email, userB.email, superadmin.email);

    // Logins
    tokenA = await loginTestUser(userA.email, 'test123');
    tokenB = await loginTestUser(userB.email, 'test123');
    tokenSuperadmin = await loginTestUser(superadmin.email, 'test123');
  });

  afterAll(async () => {
    const { prisma } = require('../../config/prisma');
    await prisma.$disconnect();
    if (global.server && typeof global.server.close === 'function') {
      await global.server.close();
    }
  });

  test('Cada usuario puede crear una mascota en su organización', async () => {
    // Crear mascota en OrgA
    const resA = await request(app)
      .post('/api/pets')
      .set('Authorization', `Bearer ${tokenA}`)
      .set('X-Organization-Id', orgA.id)
      .send({ name: 'Firulais', species: 'dog', status: 'available', images: [IMAGE_URL] });
    if (resA.status !== 201) {
      console.error('[TEST] Error crear mascota UserA:', resA.body);
    }
    expect(resA.status).toBe(201);
    petA = resA.body;
    console.log('Mascota creada por UserA:', petA);

    // Crear mascota en OrgB
    const resB = await request(app)
      .post('/api/pets')
      .set('Authorization', `Bearer ${tokenB}`)
      .set('X-Organization-Id', orgB.id)
      .send({ name: 'Mishi', species: 'cat', status: 'available', images: [IMAGE_URL] });
    if (resB.status !== 201) {
      console.error('[TEST] Error crear mascota UserB:', resB.body);
    }
    expect(resB.status).toBe(201);
    petB = resB.body;
    console.log('Mascota creada por UserB:', petB);
  }, 5000);

  test('UserA solo puede ver su mascota, no la de OrgB', async () => {
    const res = await request(app)
      .get('/api/pets')
      .set('Authorization', `Bearer ${tokenA}`)
      .set('X-Organization-Id', orgA.id);
    if (res.status !== 200) {
      console.error('[TEST] Error ver mascotas UserA:', res.body);
    }
    expect(res.status).toBe(200);
    expect(res.body.find(p => p.id === petA.id)).toBeTruthy();
    expect(res.body.find(p => p.id === petB?.id)).toBeFalsy();
    console.log('Mascotas visibles para UserA:', res.body.map(p => p.name));
  });

  test('UserB solo puede ver su mascota, no la de OrgA', async () => {
    const res = await request(app)
      .get('/api/pets')
      .set('Authorization', `Bearer ${tokenB}`)
      .set('X-Organization-Id', orgB.id);
    if (res.status !== 200) {
      console.error('[TEST] Error ver mascotas UserB:', res.body);
    }
    expect(res.status).toBe(200);
    expect(res.body.find(p => p.id === petB.id)).toBeTruthy();
    expect(res.body.find(p => p.id === petA?.id)).toBeFalsy();
    console.log('Mascotas visibles para UserB:', res.body.map(p => p.name));
  });

  test('Superadmin puede ver todas las mascotas', async () => {
    const res = await request(app)
      .get('/api/pets')
      .set('Authorization', `Bearer ${tokenSuperadmin}`);
    if (res.status !== 200) {
      console.error('[TEST] Error ver mascotas Superadmin:', res.body);
    }
    expect(res.status).toBe(200);
    expect(res.body.find(p => p.id === petA.id)).toBeTruthy();
    expect(res.body.find(p => p.id === petB.id)).toBeTruthy();
    console.log('Mascotas visibles para Superadmin:', res.body.map(p => p.name));
  });

  // Puedes agregar más tests para update/delete y validaciones de acceso prohibido
}); 