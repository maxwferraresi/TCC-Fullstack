import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoresModule } from './autores/autores.module';
import { DatabaseModule } from './database/database.module';
import { EditorasModule } from './editoras/editoras.module';
import { LivrosModule } from './livros/livros.module';
import { Autor } from './autores/entities/autor.entity';
import { Editora } from './editoras/entities/editora.entity';
import { Livro } from './livros/entities/livro.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LivrosModule,
    AutoresModule,
    EditorasModule,
    DatabaseModule,
    ConfigModule.forRoot(),
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
