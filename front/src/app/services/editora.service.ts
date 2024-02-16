import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEditora, IEditoraCreateOrUpdate } from '../../types/editora.type';
import { editoraUrl } from '../helpers/urls';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	getAll(): Observable<IEditora[]> {
		return this.http.get<IEditora[]>(editoraUrl.getAll());
	}

	getByNome(nome: string): Observable<IEditora[]> {
		return this.http.get<IEditora[]>(editoraUrl.getByNome(nome));
	}

	create(editora: IEditora): Observable<IEditora> {
		const editoraCreate: IEditoraCreateOrUpdate = {
			nome: editora.nome,
			endereco: editora.endereco,
			telefone: editora.telefone,
		}
		return this.http.post<IEditora>(editoraUrl.save(), editoraCreate);
	}

	update(editora: IEditora): Observable<IEditora> {
		const editoraUpdate: IEditoraCreateOrUpdate = {
			nome: editora.nome,
			endereco: editora.endereco,
			telefone: editora.telefone,
		}
		return this.http.patch<IEditora>(editoraUrl.update(editora.id), editoraUpdate);
	}

	delete(id: number): Observable<IEditora> {
		return this.http.delete<IEditora>(editoraUrl.delete(id));
	}
}
