import { Autor } from 'src/autores/entities/autor.entity';
import { Editora } from 'src/editoras/entities/editora.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @ManyToOne(() => Autor, (autor) => autor.livros, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  autorId: number;

  @ManyToOne(() => Editora, (editora) => editora.livros, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  editoraId: number;
}
