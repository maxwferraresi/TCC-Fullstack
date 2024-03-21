import { Livro } from 'src/livros/entities/livro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Editora {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @OneToMany(() => Livro, (livro) => livro.editoraId)
  livros: Livro[];
}
