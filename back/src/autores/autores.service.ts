import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AutoresService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createAutorDto: Prisma.AutorCreateInput) {
    return this.databaseService.autor.create({
      data: createAutorDto,
    });
  }

  findAll() {
    return this.databaseService.autor.findMany();
  }

  findOne(id: number) {
    return this.databaseService.autor.findUnique({
      where: {
        id,
      },
    });
  }

  findByNome(nome: string) {
    return this.databaseService.autor.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
    });
  }

  update(id: number, updateAutorDto: Prisma.AutorUpdateInput) {
    return this.databaseService.autor.update({
      where: {
        id,
      },
      data: updateAutorDto,
    });
  }

  async remove(id: number) {
    const livrosAssociados = await this.databaseService.livro.findMany({
      where: {
        autorId: id,
      },
    });

    if (livrosAssociados.length > 0) {
      for (const livro of livrosAssociados) {
        await this.databaseService.livro.delete({
          where: {
            id: livro.id,
          },
        });
      }
    }

    return this.databaseService.autor.delete({
      where: {
        id: id,
      },
    });
  }
}
