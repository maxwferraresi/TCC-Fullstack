import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { Editora } from './entities/editora.entity';

@Controller('editoras')
export class EditorasController {
  constructor(private readonly editorasService: EditorasService) {}

  @Post()
  create(@Body() createEditoraDto: Editora) {
    return this.editorasService.create(createEditoraDto);
  }

  @Get()
  findAll() {
    return this.editorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorasService.findOne(+id);
  }

  @Get('nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.editorasService.findByNome(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEditoraDto: Editora) {
    return this.editorasService.update(+id, updateEditoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorasService.remove(+id);
  }
}
