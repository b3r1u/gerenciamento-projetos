import { Injectable } from '@angular/core';
import { Projeto } from '../interface/projeto';
import { Atividade } from '../interface/atividade';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageProjetosService {
  private localStorageKey = 'projects';

  constructor() {}

  // Get all projects
  getProjects(): Projeto[] {
    const projects = localStorage.getItem(this.localStorageKey);
    return projects ? JSON.parse(projects) : [];
  }

  private parseProjects(projects: Projeto[]): Projeto[] {
    return projects.map((proj) => ({
      ...proj,
      startDate: new Date(proj.startDate),
      endDate: new Date(proj.endDate),
    }));
  }

  //Buscado Projeto por Id
  getProjectById(id: number): Projeto | undefined {
    const projetos = this.getProjects();
    return projetos.find((projeto) => projeto.id === id);
  }

  // Add a new project
  addProject(project: Projeto): void {
    const projects = this.getProjects();
    project.id = new Date().getTime();
    project.atividades = [];
    projects.push(project);
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  // Remove a project by ID
  removeProject(id: number): void {
    let projects = this.getProjects();
    projects = projects.filter((project) => project.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  // Update a project by ID
  updateProject(updatedProject: Projeto): void {
    let projects = this.getProjects();
    projects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  addAtividade(projetoId: number, atividade: Atividade): void {
    const projects = this.getProjects();
    const projetoIndex = projects.findIndex(
      (projeto) => projeto.id === projetoId
    );
    if (projetoIndex !== -1) {
      if (!projects[projetoIndex].atividades) {
        projects[projetoIndex].atividades = []; 
      }
      atividade.id = new Date().getTime();
      projects[projetoIndex].atividades.push(atividade);
      localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
    }
  }
}

