import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LivrosService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createLivroDto: Prisma.LivroCreateInput) {
    return this.databaseService.livro.create({
      data: createLivroDto,
    });
  }

  findAll() {
    return this.databaseService.livro.findMany();
  }

  findOne(id: number) {
    return this.databaseService.livro.findUnique({
      where: {
        id,
      },
    });
  }

  findByTitulo(titulo: string) {
    return this.databaseService.livro.findMany({
      where: {
        titulo: {
          contains: titulo,
        },
      },
    });
  }

  update(id: number, updateLivroDto: Prisma.LivroUpdateInput) {
    return this.databaseService.livro.update({
      where: {
        id,
      },
      data: updateLivroDto,
    });
  }

  remove(id: number) {
    return this.databaseService.livro.delete({
      where: {
        id,
      },
    });
  }
}
