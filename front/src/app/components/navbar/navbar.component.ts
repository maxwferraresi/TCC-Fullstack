import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
	@Output() pesquisaEnviada = new EventEmitter<string>();
	@Input() isLoadingSearch = false;
	@Input() notHomePage = false;
	@Input() totalProdutosNoCarrinho!: string;
	@Input() nomePagina!: string;

	enviarPesquisa(termo: string) {
		this.pesquisaEnviada.emit(termo);
	}
}
