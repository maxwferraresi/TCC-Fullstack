import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILivro, ILivroCreateOrUpdate } from '../../types/livro.type';
import { livroUrl } from '../helpers/urls';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	getAll(): Observable<ILivro[]> {
		return this.http.get<ILivro[]>(livroUrl.getAll());
	}

	getByTitulo(titulo: string): Observable<ILivro[]> {
		return this.http.get<ILivro[]>(livroUrl.getByTitulo(titulo));
	}

	getById(id: number): Observable<ILivro> {
		return this.http.get<ILivro>(livroUrl.getById(id));
	}

	create(livro: ILivro): Observable<ILivro> {
		const livroCreate: ILivroCreateOrUpdate = {
			titulo: livro.titulo,
			autorId: livro.autorId,
			editoraId: livro.editoraId,
		}
		return this.http.post<ILivro>(livroUrl.save(), livroCreate);
	}

	update(livro: ILivro): Observable<ILivro> {
		const livroUpdate: ILivroCreateOrUpdate = {
			titulo: livro.titulo,
			autorId: livro.autorId,
			editoraId: livro.editoraId,
		}
		return this.http.patch<ILivro>(livroUrl.update(livro.id), livroUpdate);
	}

	delete(id: number): Observable<ILivro> {
		return this.http.delete<ILivro>(livroUrl.delete(id));
	}
}
