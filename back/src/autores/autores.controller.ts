import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { Autor } from './entities/autor.entity';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutorDto: Autor) {
    return this.autoresService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoresService.findOne(+id);
  }

  @Get('nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.autoresService.findByNome(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorDto: Autor) {
    return this.autoresService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoresService.remove(+id);
  }
}
