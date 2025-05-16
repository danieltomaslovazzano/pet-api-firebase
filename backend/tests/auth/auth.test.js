// --- INICIO: Helpers y setup para entorno Prisma/PostgreSQL ---

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTestUser(userData) {
  return await prisma.user.create({ data: userData });
}

beforeEach(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

// --- FIN: Helpers y setup para entorno Prisma/PostgreSQL ---

// --- INICIO: TESTS DE AUTH USANDO PRISMA ---
describe('User Management (Prisma)', () => {
  let user;

  beforeEach(async () => {
    user = await createTestUser({
      email: 'testuser@example.com',
      name: 'Test User',
      password: 'Test1234!',
      role: 'user',
    });
  });

  it('should create a user with valid data', async () => {
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('testuser@example.com');
    expect(user.name).toBe('Test User');
  });

  it('should not allow duplicate emails', async () => {
    await expect(createTestUser({
      email: 'testuser@example.com',
      name: 'Another User',
      password: 'Test1234!',
      role: 'user',
    })).rejects.toThrow();
  });

  it('should update a user', async () => {
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { name: 'Updated Name' },
    });
    expect(updated.name).toBe('Updated Name');
  });

  it('should delete a user', async () => {
    await prisma.user.delete({ where: { id: user.id } });
    const found = await prisma.user.findUnique({ where: { id: user.id } });
    expect(found).toBeNull();
  });
});
// --- FIN: TESTS DE AUTH USANDO PRISMA --- 