// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.autor.createMany({
      data: [
        { nome: 'Autor1', idade: 30 },
        { nome: 'Autor2', idade: 40 },
        { nome: 'Autor3', idade: 35 },
        { nome: 'Autor4', idade: 28 },
        { nome: 'Autor5', idade: 45 },
      ],
    });

    await prisma.editora.createMany({
      data: [
        { nome: 'Editora1', endereco: 'Endereco1', telefone: '123-456-7890' },
        { nome: 'Editora2', endereco: 'Endereco2', telefone: '987-654-3210' },
        { nome: 'Editora3', endereco: 'Endereco3', telefone: '111-222-3333' },
        { nome: 'Editora4', endereco: 'Endereco4', telefone: '444-555-6666' },
        { nome: 'Editora5', endereco: 'Endereco5', telefone: '777-888-9999' },
      ],
    });

    await prisma.livro.createMany({
      data: [
        {
          titulo: 'Livro1',
          autorId: 1,
          editoraId: 1,
        },
        {
          titulo: 'Livro2',
          autorId: 2,
          editoraId: 2,
        },
        {
          titulo: 'Livro3',
          autorId: 3,
          editoraId: 3,
        },
        {
          titulo: 'Livro4',
          autorId: 4,
          editoraId: 4,
        },
        {
          titulo: 'Livro5',
          autorId: 5,
          editoraId: 5,
        },
      ],
    });
  } catch (error) {
    console.error('Erro durante o seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
