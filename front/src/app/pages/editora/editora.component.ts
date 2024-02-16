import { Component, Inject } from '@angular/core';
import { IEditora } from '../../../types/editora.type';
import { EditoraService } from '../../services/editora.service';

const EDITORA_CADASTRO = {
	id: 0,
	nome: '',
  endereco: '',
  telefone: '',
};

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrl: './editora.component.css'
})
export class EditoraComponent {
  colunas = [
		'id',
		'nome',
		'telefone',
	];

	showModalEditar = false;
	showModalDeletar = false;
	showModalCadastrar = false;
	editoraSelecionada!: IEditora;
	editoras: IEditora[] = [];
  editoraCadastro = EDITORA_CADASTRO;
	isLoadingSearch = false;
	termoPesquisa = '';

	constructor(
		@Inject(EditoraService) private readonly editoraService: EditoraService,
	) {}

	ngOnInit(): void {
		this.carregarEditoras();
	}

	abrirModalEditar(editora: IEditora): void {
		this.editoraSelecionada = { ...editora };
    this.setarValorInicialForm();
		this.showModalEditar = true;
	}

	abrirModalCadastrar(abrir: boolean): void {
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(editora: IEditora): void {
		this.editoraSelecionada = editora;
		this.showModalDeletar = true;
	}

	cadastrarEditora(): void {
		this.editoraService.create(this.editoraCadastro).subscribe(() => {
			this.carregarEditoras();
			this.showModalCadastrar = false;
		});
	}

	editarEditora(): void {
		this.editoraService.update(this.editoraSelecionada).subscribe(() => {
			this.carregarEditoras();
			this.showModalEditar = false;
		});
	}

	deletarEditora(): void {
		if (this.editoraSelecionada.id) {
			this.editoraService.delete(this.editoraSelecionada.id).subscribe(() => {
				this.carregarEditoras();
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
			this.carregarEditoras();
			this.isLoadingSearch = false;
			return;
		}

		this.editoraService.getByNome(this.termoPesquisa).subscribe(editoras => {
			if (editoras.length > 0) {
				this.editoras = editoras;
			}

			this.isLoadingSearch = false;
		});
	}

  private setarValorInicialForm(): void {
		this.editoraSelecionada = this.editoras.find(editora => editora.id == this.editoraSelecionada.id)!;
	}
	
	private carregarEditoras(): void {
		this.editoraService.getAll().subscribe(editoras => {
			this.editoras = editoras;
		});
	}
}
