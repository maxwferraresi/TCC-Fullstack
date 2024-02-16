import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorasModule } from './editoras/editoras.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LivrosModule, AutoresModule, EditorasModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
