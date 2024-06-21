import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagesProjetoComponent } from './pages/pages-projeto/pages-projeto.component';
import { PagesSobreComponent } from './pages/pages-sobre/pages-sobre.component';
import { PagesAdicionarProjetoComponent } from './pages/pages-adicionar-projeto/pages-adicionar-projeto.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagesProjetoComponent,
    PagesSobreComponent,
    PagesAdicionarProjetoComponent,
    CardsProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
