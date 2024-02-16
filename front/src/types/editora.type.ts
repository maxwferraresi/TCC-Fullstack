export type IEditora = {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
};

export type IEditoraCreateOrUpdate = {
  nome: string;
  endereco: string;
  telefone: string;
};