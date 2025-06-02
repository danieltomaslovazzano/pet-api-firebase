import { PrismaClient } from '@prisma/client';
import { Organization } from '../types/organization';

export class OrganizationModel {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createOrganization(organization: Organization): Promise<Organization> {
    return this.prisma.organization.create({
      data: organization,
    });
  }

  async getOrganizationById(id: string): Promise<Organization | null> {
    return this.prisma.organization.findUnique({
      where: { id },
    });
  }

  async getAllOrganizations(): Promise<Organization[]> {
    return this.prisma.organization.findMany();
  }

  async updateOrganization(id: string, data: Partial<Organization>): Promise<Organization> {
    return this.prisma.organization.update({
      where: { id },
      data,
    });
  }

  async deleteOrganization(id: string): Promise<Organization> {
    return this.prisma.organization.delete({
      where: { id },
    });
  }
} 