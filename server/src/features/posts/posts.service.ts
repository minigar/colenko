import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly db: DatabaseService) {}

  async getAllPosts() {
    return await this.db.post.findMany();
  }

  async getPostById(id: number) {
    return await this.db.post.findUnique({ where: { id } });
  }
}
