import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesSobreComponent } from './pages/pages-sobre/pages-sobre.component';
import { PagesProjetoComponent } from './pages/pages-projeto/pages-projeto.component';
import { PagesAdicionarProjetoComponent } from './pages/pages-adicionar-projeto/pages-adicionar-projeto.component';

const routes: Routes = [
  {path: '', component: PagesSobreComponent},
  {path: 'projetos', component: PagesProjetoComponent},
  {path: 'adicionarProjeto', component: PagesAdicionarProjetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
