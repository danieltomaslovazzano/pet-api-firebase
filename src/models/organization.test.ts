import { OrganizationModel } from './organization';
import { PrismaClient } from '@prisma/client';
import { Organization } from '../types/organization';

// Mock PrismaClient
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    organization: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

describe('OrganizationModel', () => {
  let organizationModel: OrganizationModel;
  let prismaMock: jest.Mocked<PrismaClient>;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Initialize the mock PrismaClient
    prismaMock = new PrismaClient() as jest.Mocked<PrismaClient>;
    organizationModel = new OrganizationModel(prismaMock);
  });

  afterEach(() => {
    // Clean up after each test
    jest.clearAllMocks();
  });

  describe('createOrganization', () => {
    it('should create a new organization', async () => {
      const mockOrg: Organization = {
        id: '1',
        name: 'Test Org',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prismaMock.organization.create as jest.Mock).mockResolvedValue(mockOrg);

      const result = await organizationModel.createOrganization(mockOrg);

      expect(result).toEqual(mockOrg);
      expect(prismaMock.organization.create).toHaveBeenCalledWith({
        data: mockOrg,
      });
    });
  });

  describe('getOrganizationById', () => {
    it('should return an organization by id', async () => {
      const mockOrg: Organization = {
        id: '1',
        name: 'Test Org',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prismaMock.organization.findUnique as jest.Mock).mockResolvedValue(mockOrg);

      const result = await organizationModel.getOrganizationById('1');

      expect(result).toEqual(mockOrg);
      expect(prismaMock.organization.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });

    it('should return null if organization not found', async () => {
      (prismaMock.organization.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await organizationModel.getOrganizationById('1');

      expect(result).toBeNull();
      expect(prismaMock.organization.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('getAllOrganizations', () => {
    it('should return all organizations', async () => {
      const mockOrgs: Organization[] = [
        {
          id: '1',
          name: 'Test Org 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          name: 'Test Org 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      (prismaMock.organization.findMany as jest.Mock).mockResolvedValue(mockOrgs);

      const result = await organizationModel.getAllOrganizations();

      expect(result).toEqual(mockOrgs);
      expect(prismaMock.organization.findMany).toHaveBeenCalled();
    });
  });

  describe('updateOrganization', () => {
    it('should update an organization', async () => {
      const mockOrg: Organization = {
        id: '1',
        name: 'Updated Org',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prismaMock.organization.update as jest.Mock).mockResolvedValue(mockOrg);

      const result = await organizationModel.updateOrganization('1', { name: 'Updated Org' });

      expect(result).toEqual(mockOrg);
      expect(prismaMock.organization.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: { name: 'Updated Org' },
      });
    });
  });

  describe('deleteOrganization', () => {
    it('should delete an organization', async () => {
      const mockOrg: Organization = {
        id: '1',
        name: 'Test Org',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prismaMock.organization.delete as jest.Mock).mockResolvedValue(mockOrg);

      const result = await organizationModel.deleteOrganization('1');

      expect(result).toEqual(mockOrg);
      expect(prismaMock.organization.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
}); 