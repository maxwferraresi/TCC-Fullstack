import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Like, Repository } from 'typeorm';
import { Editora } from './entities/editora.entity';

@Injectable()
export class EditorasService {
  constructor(
    @InjectRepository(Editora) private editoraRepository: Repository<Editora>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createEditoraDto: Editora) {
    const editora = new Editora();
    editora.nome = createEditoraDto.nome;
    editora.endereco = createEditoraDto.endereco;
    editora.telefone = createEditoraDto.telefone;
    return this.entityManager.save(editora);
  }

  findAll() {
    return this.editoraRepository.find();
  }

  findOne(id: number) {
    return this.editoraRepository.findOneBy({ id });
  }

  findByNome(nome: string) {
    return this.editoraRepository.find({
      where: {
        nome: Like(`%${nome}%`),
      },
    });
  }

  update(id: number, updateEditoraDto: Editora) {
    return this.editoraRepository.update(id, updateEditoraDto);
  }

  async remove(id: number) {
    // const livrosAssociados = await this.databaseService.livro.findMany({
    //   where: {
    //     editoraId: id,
    //   },
    // });

    // if (livrosAssociados.length > 0) {
    //   for (const livro of livrosAssociados) {
    //     await this.databaseService.livro.delete({
    //       where: {
    //         id: livro.id,
    //       },
    //     });
    //   }
    // }

    // return this.databaseService.editora.delete({
    //   where: {
    //     id,
    //   },
    // });
    return this.editoraRepository.delete(id);
  }
}
