import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
})
export class TableComponent {
	@Input() colunas: string[] = [];
	@Input() data: any[] = [];
	@Input() isHistorico = false;
	@Input() isLoadingSearch = false;
	@Output() pesquisaEnviada = new EventEmitter<string>();
	@Output() dataAdd = new EventEmitter<any>();
	@Output() dataEdit = new EventEmitter<any>();
	@Output() dataDelete = new EventEmitter<any>();
	@Output() dataView = new EventEmitter<any>();
	@Output() termoPesquisa = new EventEmitter<string>();

	editar(data: any) {
		this.dataEdit.emit(data);
	}

	deletar(data: any) {
		this.dataDelete.emit(data);
	}

	adicionar() {		
		this.dataAdd.emit(true);
	}

	visualizar(data: any) {
		this.dataView.emit(data);
	}

	pesquisar(termo: string) {
		this.termoPesquisa.emit(termo);
	}

	enviarPesquisa(termo: string) {
		this.pesquisaEnviada.emit(termo);
	}

	formatarCampo(coluna: string, data: any): string {
		if (coluna === 'autor') {
			return data.autor.nome;
		}
		if (coluna === 'editora') {
			return data.editora.nome;
		}
		return data[coluna];
	}
}
