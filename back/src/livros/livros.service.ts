import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Like, Repository } from 'typeorm';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro) private livroRepository: Repository<Livro>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createLivroDto: Livro) {
    const livro = new Livro();
    livro.titulo = createLivroDto.titulo;
    livro.autorId = createLivroDto.autorId;
    livro.editoraId = createLivroDto.editoraId;

    return this.entityManager.save(livro);
  }

  findAll() {
    return this.livroRepository.find({
      relations: ['autorId', 'editoraId'],
      loadRelationIds: true,
    });
  }

  findOne(id: number) {
    return this.livroRepository.findOneBy({ id });
  }

  findByTitulo(titulo: string) {
    return this.livroRepository.find({
      where: {
        titulo: Like(`%${titulo}%`),
      },
    });
  }

  update(id: number, updateLivroDto: Livro) {
    return this.livroRepository.update(id, updateLivroDto);
  }

  remove(id: number) {
    return this.livroRepository.delete(id);
  }
}
