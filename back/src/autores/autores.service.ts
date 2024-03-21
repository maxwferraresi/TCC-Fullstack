import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Like, Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor) private autorRepository: Repository<Autor>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createAutorDto: Autor) {
    const autor = new Autor();
    autor.nome = createAutorDto.nome;
    autor.idade = createAutorDto.idade;
    return this.entityManager.save(autor);
  }

  findAll() {
    return this.autorRepository.find();
  }

  findOne(id: number) {
    return this.autorRepository.findOneBy({
      id,
    });
  }

  findByNome(nome: string) {
    return this.autorRepository.find({
      where: {
        nome: Like(`%${nome}%`),
      },
    });
  }

  update(id: number, updateAutorDto: Autor) {
    return this.autorRepository.update(id, updateAutorDto);
  }

  async remove(id: number) {
    //   const livrosAssociados = await this.autorRepository.livro.findMany({
    //     where: {
    //       autorId: id,
    //     },
    //   });

    //   if (livrosAssociados.length > 0) {
    //     for (const livro of livrosAssociados) {
    //       await this.autorRepository.livro.delete({
    //         where: {
    //           id: livro.id,
    //         },
    //       });
    //     }
    //   }

    //   return this.autorRepository.autor.delete({
    //     where: {
    //       id: id,
    //     },
    //   });
    // }
    return this.autorRepository.delete(id);
  }
}
