import { Component, Inject } from '@angular/core';
import { IAutor } from '../../../types/autor.type';
import { AutorService } from '../../services/autor.service';

const AUTOR_CADASTRO = {
  id: 0,
  nome: '',
  idade: 0,
};

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
  colunas = [
		'id',
		'nome',
		'idade',
	];

	showModalEditar = false;
	showModalDeletar = false;
	showModalCadastrar = false;
	autorSelecionado!: IAutor;
	autores: IAutor[] = [];
  autorCadastro = AUTOR_CADASTRO;
	isLoadingSearch = false;
	termoPesquisa = '';

	constructor(
		@Inject(AutorService) private readonly autorService: AutorService,
	) {}

	ngOnInit(): void {
		this.carregarAutores();
	}

	abrirModalEditar(autor: IAutor): void {
		this.autorSelecionado = { ...autor };
    this.setarValorInicialForm();
		this.showModalEditar = true;
	}

	abrirModalCadastrar(abrir: boolean): void {
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(autor: IAutor): void {
		this.autorSelecionado = autor;
		this.showModalDeletar = true;
	}

	cadastrarAutor(): void {
		this.autorService.create(this.autorCadastro).subscribe(() => {
			this.carregarAutores();
			this.showModalCadastrar = false;
		});
	}

	editarAutor(): void {
		this.autorService.update(this.autorSelecionado).subscribe(() => {
			this.carregarAutores();
			this.showModalEditar = false;
		});
	}

	deletarAutor(): void {
		if (this.autorSelecionado.id) {
			this.autorService.delete(this.autorSelecionado.id).subscribe(() => {
				this.carregarAutores();
				this.showModalDeletar = false;
			});
		}
	}

	receberPesquisa(termoPesquisa: string) {
    console.log(termoPesquisa);
    
		this.isLoadingSearch = true;
		if (termoPesquisa === '') {
			this.termoPesquisa = 'emptySearch';
		} else {
			this.termoPesquisa = termoPesquisa;
		}

		this.filtrarAutores();
	}

	filtrarAutores(): void {
		if (this.termoPesquisa === 'emptySearch') {
			this.carregarAutores();
			return;
		}

		this.autorService.getByNome(this.termoPesquisa).subscribe(autores => {
			if (autores.length > 0) {
				this.autores = autores;
			}

			this.isLoadingSearch = false;
		});
	}

  private setarValorInicialForm(): void {
		this.autorSelecionado = this.autores.find(editora => editora.id == this.autorSelecionado.id)!;
	}
	
	private carregarAutores(): void {
		this.autorService.getAll().subscribe(autores => {
			this.autores = autores;
		});
	}
}
