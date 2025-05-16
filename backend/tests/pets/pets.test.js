// --- INICIO: Helpers y setup para entorno Prisma/PostgreSQL ---

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTestUser(userData) {
  return await prisma.user.create({ data: userData });
}

async function createTestPet(petData) {
  return await prisma.pet.create({ data: petData });
}

beforeEach(async () => {
  await prisma.pet.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

// --- FIN: Helpers y setup para entorno Prisma/PostgreSQL ---

// --- INICIO: TESTS DE PETS USANDO PRISMA ---
describe('Pet Management (Prisma)', () => {
  let owner;
  let pet;

  beforeEach(async () => {
    owner = await createTestUser({
      email: 'owner@example.com',
      name: 'Owner User',
      password: 'Test1234!',
      role: 'user',
    });
    pet = await createTestPet({
      name: 'Firulais',
      species: 'dog',
      ownerId: owner.id,
    });
  });

  it('should create a pet with valid data', async () => {
    const newPet = await createTestPet({
      name: 'Mishi',
      species: 'cat',
      ownerId: owner.id,
    });
    expect(newPet).toHaveProperty('id');
    expect(newPet.name).toBe('Mishi');
    expect(newPet.species).toBe('cat');
    expect(newPet.ownerId).toBe(owner.id);
  });

  it('should retrieve an existing pet by ID', async () => {
    const foundPet = await prisma.pet.findUnique({ where: { id: pet.id } });
    expect(foundPet).not.toBeNull();
    expect(foundPet.id).toBe(pet.id);
  });

  it('should update a pet', async () => {
    const updated = await prisma.pet.update({
      where: { id: pet.id },
      data: { name: 'Firulais Updated' },
    });
    expect(updated.name).toBe('Firulais Updated');
  });

  it('should delete a pet', async () => {
    await prisma.pet.delete({ where: { id: pet.id } });
    const found = await prisma.pet.findUnique({ where: { id: pet.id } });
    expect(found).toBeNull();
  });

  it('should not allow creating a pet without ownerId', async () => {
    await expect(createTestPet({ name: 'NoOwner', species: 'cat' })).rejects.toThrow();
  });
});
// --- FIN: TESTS DE PETS USANDO PRISMA --- 