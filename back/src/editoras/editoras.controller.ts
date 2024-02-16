import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { Prisma } from '@prisma/client';

@Controller('editoras')
export class EditorasController {
  constructor(private readonly editorasService: EditorasService) {}

  @Post()
  create(@Body() createEditoraDto: Prisma.EditoraCreateInput) {
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
  update(@Param('id') id: string, @Body() updateEditoraDto: UpdateEditoraDto) {
    return this.editorasService.update(+id, updateEditoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorasService.remove(+id);
  }
}
