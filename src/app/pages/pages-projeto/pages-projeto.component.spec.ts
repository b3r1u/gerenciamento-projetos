import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesProjetoComponent } from './pages-projeto.component';

describe('PagesProjetoComponent', () => {
  let component: PagesProjetoComponent;
  let fixture: ComponentFixture<PagesProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesProjetoComponent]
    });
    fixture = TestBed.createComponent(PagesProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
