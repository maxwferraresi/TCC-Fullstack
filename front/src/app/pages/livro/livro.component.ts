import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILivro, ILivroComAutorEEditora } from '../../../types/livro.type';
import { LivroService } from '../../services/livro.service';
import { IAutor } from '../../../types/autor.type';
import { IEditora } from '../../../types/editora.type';
import { AutorService } from '../../services/autor.service';
import { EditoraService } from '../../services/editora.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  colunas = [
		'id',
		'titulo',
		'autor',
	];

	showModalEditar = false;
	showModalDeletar = false;
	showModalCadastrar = false;
	livrosAutorEditora: ILivroComAutorEEditora[] = [];
	livroAutorEditoraSelecionado!: ILivroComAutorEEditora;
	livros: ILivro[] = [];
	autores: IAutor[] = [];
	editoras: IEditora[] = [];
	isLoadingSearch = false;
	termoPesquisa = '';

  editForm = new FormGroup({
    titulo: new FormControl(''),
    autorId: new FormControl(0),
    editoraId: new FormControl(0),
  });

	constructor(
		@Inject(LivroService) private readonly livroService: LivroService,
		@Inject(AutorService) private readonly autorService: AutorService,
		@Inject(EditoraService) private readonly editoraService: EditoraService,
	) {}

	ngOnInit(): void {
		this.carregarAutores();
		this.carregarEditoras();
		this.carregarlivros();
	}

	abrirModalEditar(livro: ILivroComAutorEEditora): void {
		this.livroAutorEditoraSelecionado = { ...livro };
		this.editForm.setValue({
			titulo: livro.titulo,
			autorId: livro.autor.id,
			editoraId: livro.editora.id,
		});

		this.showModalEditar = true;
	}

	abrirModalCadastrar(abrir: boolean): void {
		this.editForm.setValue({
			titulo: null,
			autorId: null,
			editoraId: null,
		});
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(livro: ILivroComAutorEEditora): void {
		this.livroAutorEditoraSelecionado = livro;
		this.showModalDeletar = true;
	}

	cadastrarLivro(): void {
		const titulo = this.editForm.value.titulo;
		const	autor = this.autores.find(autor => autor.id == this.editForm.value.autorId);
		const	editora = this.editoras.find(editora => editora.id == this.editForm.value.editoraId);

		if (titulo && autor && editora) {
			const infoLivro = {
				id: 0,
				titulo,
				autorId: autor.id,
				editoraId: editora.id,
			};

			this.livroService.create(infoLivro).subscribe(() => {
				this.carregarlivros();
			});
			this.showModalCadastrar = false;
		}
	}

	editarLivro(): void {
		const titulo = this.editForm.value.titulo;
		const	autor = this.autores.find(autor => autor.id == this.editForm.value.autorId);
		const	editora = this.editoras.find(editora => editora.id == this.editForm.value.editoraId);

		if (titulo && autor && editora) {
			const infoLivro = {
				id: this.livroAutorEditoraSelecionado.id,
				titulo,
				autorId: autor.id,
				editoraId: editora.id,
			};

			this.livroService.update(infoLivro).subscribe(() => {
				this.carregarlivros();
				this.showModalEditar = false;
			});
		}
		
	}

	deletarLivro(): void {
		if (this.livroAutorEditoraSelecionado.id) {
			this.livroService.delete(this.livroAutorEditoraSelecionado.id).subscribe(() => {
				this.carregarlivros();
				this.showModalDeletar = false;
			});
		}
	}

	receberPesquisa(termoPesquisa: string) {
		this.isLoadingSearch = true;
		if (termoPesquisa === '') {
			this.termoPesquisa = 'emptySearch';
		} else {
			this.termoPesquisa = termoPesquisa;
		}

		this.filtrarlivros();
	}

	filtrarlivros(): void {
		if (this.termoPesquisa === 'emptySearch') {
			this.carregarlivros();
			this.isLoadingSearch = false;
			return;
		}

		this.livroService.getByTitulo(this.termoPesquisa).subscribe(livros => {
			if (livros.length > 0) {
				this.livros = livros;
			}
			this.carregarlivrosAutorEditora();

			this.isLoadingSearch = false;
		});
	}

	private carregarlivros(): void {
		this.livroService.getAll().subscribe(livros => {
			if (livros.length > 0) {
				this.livros = livros;
			}

			this.carregarlivrosAutorEditora();

			this.isLoadingSearch = false;
		});
	}

	private carregarAutores(): void {
		this.autorService.getAll().subscribe(autores => {
			console.log({autores});

			if (autores.length > 0) {
				this.autores = autores;
			}
		});
	}
	
	private carregarEditoras(): void {
		this.editoraService.getAll().subscribe(editoras => {
			console.log({editoras});

			if (editoras.length > 0) {
				this.editoras = editoras;
			}
		});
	}

	private carregarlivrosAutorEditora(): void {
		const autorMock = {
			id: 1,
			nome: 'J.R.R. Tolkien',
			idade: 81,
		};

		const editoraMock = {
			id: 1,
			nome: 'HarperCollins',
			endereco: 'Rua das Acácias, 123',
			telefone: '11 1234-5678',
		};

		this.livrosAutorEditora = this.livros.map(livro => {
			let autor = this.autores.find(autor => autor.id == livro.autorId);
			let editora = this.editoras.find(editora => editora.id == livro.editoraId);

			if (!autor) {
				autor = autorMock;
			}

			if (!editora) {
				editora = editoraMock;
			}

			return {
				id: livro.id,
				titulo: livro.titulo,
				autor,
				editora,
			};
		});
	}
}
