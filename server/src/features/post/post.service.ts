import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(data: Prisma.PostCreateInput) {
    return await this.prisma.post.create({ data });
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.PostUpdateInput) {
    return await this.prisma.post.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id } });
  }
}
