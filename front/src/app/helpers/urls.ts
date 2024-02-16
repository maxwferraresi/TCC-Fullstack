export const livroUrl = {
	getAll: (): string => `http://localhost:3000/livros`,
	getById: (id: number): string => `http://localhost:3000/livros/${id}`,
	getByTitulo: (titulo: string): string => `http://localhost:3000/livros/titulo/${titulo}`,
	update: (id: number): string => `http://localhost:3000/livros/${id}`,
	save: (): string => `http://localhost:3000/livros/`,
	delete: (id: number): string => `http://localhost:3000/livros/${id}`,
};

export const editoraUrl = {
	getAll: (): string => `http://localhost:3000/editoras`,
	getById: (id: number): string => `http://localhost:3000/editoras/${id}`,
	getByNome: (nome: string): string => `http://localhost:3000/editoras/nome/${nome}`,
	update: (id: number): string => `http://localhost:3000/editoras/${id}`,
	save: (): string => `http://localhost:3000/editoras/`,
	delete: (id: number): string => `http://localhost:3000/editoras/${id}`,
};

export const autorUrl = {
	getAll: (): string => `http://localhost:3000/autores`,
	getById: (id: number): string => `http://localhost:3000/autores/${id}`,
	getByNome: (nome: string): string => `http://localhost:3000/autores/nome/${nome}`,
	update: (id: number): string => `http://localhost:3000/autores/${id}`,
	save: (): string => `http://localhost:3000/autores/`,
	delete: (id: number): string => `http://localhost:3000/autores/${id}`,
};