import { IAutor } from "./autor.type";
import { IEditora } from "./editora.type";

export type ILivro = {
  id: number;
  titulo: string;
  autorId: number;
  editoraId: number;
};

export type ILivroCreateOrUpdate = {
  titulo: string;
  autorId: number;
  editoraId: number;
};

export type ILivroComAutorEEditora = {
  id: number;
  titulo: string;
  autor: IAutor;
  editora: IEditora;
};