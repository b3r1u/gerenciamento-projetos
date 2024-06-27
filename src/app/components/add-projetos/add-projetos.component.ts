import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Projeto } from 'src/app/interface/projeto';
import { Atividade } from 'src/app/interface/atividade';
import { LocalStorageProjetosService } from 'src/app/service/local-storage-projetos.service';

@Component({
  selector: 'app-add-projetos',
  templateUrl: './add-projetos.component.html',
  styleUrls: ['./add-projetos.component.scss'],
})
export class AddProjetosComponent {
  name!: string;
  startDate: Date = new Date();
  endDate: Date = new Date();
  members!: string;
  description!: string;

  constructor(
    private localStorageProjetoService: LocalStorageProjetosService
  ) {}

  mostrarCamposAdicionarProjeto = false;

  toggleCamposAdicionarProjeto(): void {
    this.mostrarCamposAdicionarProjeto = !this.mostrarCamposAdicionarProjeto;
  }

  addProject(): void {
    const newProject: Projeto = {
      id: 0,
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      members: this.members.split(','),
      description: this.description,
      atividades: [],
    };
    this.localStorageProjetoService.addProject(newProject);
    this.name = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.members = '';
    this.description = '';
  }
}
