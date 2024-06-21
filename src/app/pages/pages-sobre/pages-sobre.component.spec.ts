import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSobreComponent } from './pages-sobre.component';

describe('PagesSobreComponent', () => {
  let component: PagesSobreComponent;
  let fixture: ComponentFixture<PagesSobreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesSobreComponent]
    });
    fixture = TestBed.createComponent(PagesSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
