import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/interface/projeto';
import { LocalStorageProjetosService } from 'src/app/service/local-storage-projetos.service';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.scss']
})
export class CardsProjetosComponent implements OnInit {

  projetos!: Projeto[];

  constructor(private localStorageProjetoService: LocalStorageProjetosService) {}

  ngOnInit(): void {
    this.loadProjetos()
  }

  loadProjetos(): void {
    this.projetos = this.localStorageProjetoService.getProjects();
  }

  removeProjeto(id: number): void {
    this.localStorageProjetoService.removeProject(id);
    this.loadProjetos();
  }

}
