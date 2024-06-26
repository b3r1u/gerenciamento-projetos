import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageProjetosService } from 'src/app/service/local-storage-projetos.service';
import { Projeto } from 'src/app/interface/projeto';


@Component({
  selector: 'app-pages-info-projeto',
  templateUrl: './pages-info-projeto.component.html',
  styleUrls: ['./pages-info-projeto.component.scss'],
})
export class PagesInfoProjetoComponent implements OnInit {
  projeto: Projeto | undefined;

  constructor(
    private route: ActivatedRoute,
    private localStorageProjetosService: LocalStorageProjetosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projeto = this.localStorageProjetosService.getProjectById(id);
    console.log(this.projeto?.name)
  }
}
