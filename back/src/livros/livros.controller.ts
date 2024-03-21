import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Livro } from './entities/livro.entity';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: Livro) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(+id);
  }

  @Get('titulo/:titulo')
  findByTitulo(@Param('titulo') titulo: string) {
    return this.livrosService.findByTitulo(titulo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivroDto: Livro) {
    return this.livrosService.update(+id, updateLivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livrosService.remove(+id);
  }
}
