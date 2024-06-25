import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesInfoProjetoComponent } from './pages-info-projeto.component';

describe('PagesInfoProjetoComponent', () => {
  let component: PagesInfoProjetoComponent;
  let fixture: ComponentFixture<PagesInfoProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesInfoProjetoComponent]
    });
    fixture = TestBed.createComponent(PagesInfoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
