import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagesProjetoComponent } from './pages/pages-projeto/pages-projeto.component';
import { PagesSobreComponent } from './pages/pages-sobre/pages-sobre.component';
import { PagesAdicionarProjetoComponent } from './pages/pages-adicionar-projeto/pages-adicionar-projeto.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProjetosComponent } from './components/add-projetos/add-projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagesProjetoComponent,
    PagesSobreComponent,
    PagesAdicionarProjetoComponent,
    CardsProjetosComponent,
    AddProjetosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
