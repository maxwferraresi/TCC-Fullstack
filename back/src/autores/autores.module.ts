import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { Autor } from './entities/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutoresController],
  providers: [AutoresService],
})
export class AutoresModule {}
