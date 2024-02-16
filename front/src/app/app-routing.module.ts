import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './pages/livro/livro.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { AutorComponent } from './pages/autor/autor.component';

const routes: Routes = [
  {path: '', component: LivroComponent},
  {path: 'livros', component: LivroComponent},
  {path: 'editoras', component: EditoraComponent},
  {path: 'autores', component: AutorComponent},
  {path: '**', component: LivroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
