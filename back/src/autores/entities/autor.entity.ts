import { Livro } from 'src/livros/entities/livro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: string;

  @OneToMany(() => Livro, (livro) => livro.autorId)
  livros: Livro[];
}
