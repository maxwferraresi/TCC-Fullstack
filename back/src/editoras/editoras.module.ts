import { Module } from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { EditorasController } from './editoras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editora } from './entities/editora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Editora])],
  controllers: [EditorasController],
  providers: [EditorasService],
})
export class EditorasModule {}
