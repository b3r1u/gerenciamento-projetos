import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageProjetosService } from 'src/app/service/local-storage-projetos.service';
import { Projeto } from 'src/app/interface/projeto';
import { Atividade } from 'src/app/interface/atividade';

@Component({
  selector: 'app-pages-info-projeto',
  templateUrl: './pages-info-projeto.component.html',
  styleUrls: ['./pages-info-projeto.component.scss'],
})
export class PagesInfoProjetoComponent implements OnInit {
  projeto: Projeto | undefined;
  novaAtividade: Atividade = { id: 0, nome: '', descricao: '' };
  membrosDisponiveis: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private localStorageProjetosService: LocalStorageProjetosService
  ) {}

  mostrarMembros = false;
  mostraInfo = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projeto = this.localStorageProjetosService.getProjectById(id);
  }

  carregarProjeto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projeto = this.localStorageProjetosService.getProjectById(id);
  }

  mostraMembros(): void {
    this.mostrarMembros = !this.mostrarMembros;
    if (this.mostrarMembros) {
      this.mostraInfo = false;
    }
  }

  mostrarInfo(): void {
    this.mostraInfo = !this.mostraInfo;
    if (this.mostraInfo) {
      this.mostrarMembros = false;
    }
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  adicionarAtividade() {
    if (this.projeto) {
      this.localStorageProjetosService.addAtividade(
        this.projeto.id,
        this.novaAtividade
      );
      this.novaAtividade = { id: 0, nome: '', descricao: '' };
      this.carregarProjeto();
    }
  }
}
