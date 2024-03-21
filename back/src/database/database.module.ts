import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/autores/entities/autor.entity';
import { Editora } from 'src/editoras/entities/editora.entity';
import { Livro } from 'src/livros/entities/livro.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'database',
        port: 3306,
        username: 'root',
        password: 'rootpassword',
        database: 'mydatabase',
        entities: [Autor, Editora, Livro],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
