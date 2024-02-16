import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAutor, IAutorCreateOrUpdate } from '../../types/autor.type';
import { Observable } from 'rxjs';
import { autorUrl } from '../helpers/urls';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	getAll(): Observable<IAutor[]> {
		return this.http.get<IAutor[]>(autorUrl.getAll());
	}

	getByNome(nome: string): Observable<IAutor[]> {
		return this.http.get<IAutor[]>(autorUrl.getByNome(nome));
	}

	create(autor: IAutor): Observable<IAutor> {
		const autorCreate: IAutorCreateOrUpdate = {
			nome: autor.nome,
			idade: +autor.idade,
		}
		return this.http.post<IAutor>(autorUrl.save(), autorCreate);
	}

	update(autor: IAutor): Observable<IAutor> {
		const autorUpdate: IAutorCreateOrUpdate = {
			nome: autor.nome,
			idade: +autor.idade,
		}
		return this.http.patch<IAutor>(autorUrl.update(autor.id), autorUpdate);
	}

	delete(id: number): Observable<IAutor> {
		return this.http.delete<IAutor>(autorUrl.delete(id));
	}
}
