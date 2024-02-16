import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BadgeModule} from 'primeng/badge';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { LivroComponent } from './pages/livro/livro.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { AutorComponent } from './pages/autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    NavbarComponent,
    TableComponent,
    LivroComponent,
    EditoraComponent,
    AutorComponent
  ],
  imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MenubarModule,
		FormsModule,
		InputTextModule,
		RadioButtonModule,
		BadgeModule,
		TableModule,
		DialogModule,
		ButtonModule,
		BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
