import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAdicionarProjetoComponent } from './pages-adicionar-projeto.component';

describe('PagesAdicionarProjetoComponent', () => {
  let component: PagesAdicionarProjetoComponent;
  let fixture: ComponentFixture<PagesAdicionarProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesAdicionarProjetoComponent]
    });
    fixture = TestBed.createComponent(PagesAdicionarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
