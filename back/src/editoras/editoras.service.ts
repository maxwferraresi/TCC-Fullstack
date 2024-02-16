import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EditorasService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createEditoraDto: Prisma.EditoraCreateInput) {
    return this.databaseService.editora.create({
      data: createEditoraDto,
    });
  }

  findAll() {
    return this.databaseService.editora.findMany();
  }

  findOne(id: number) {
    return this.databaseService.editora.findUnique({
      where: {
        id,
      },
    });
  }

  findByNome(nome: string) {
    return this.databaseService.editora.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
    });
  }

  update(id: number, updateEditoraDto: Prisma.EditoraUpdateInput) {
    return this.databaseService.editora.update({
      where: {
        id,
      },
      data: updateEditoraDto,
    });
  }

  async remove(id: number) {
    const livrosAssociados = await this.databaseService.livro.findMany({
      where: {
        editoraId: id,
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

    return this.databaseService.editora.delete({
      where: {
        id,
      },
    });
  }
}
