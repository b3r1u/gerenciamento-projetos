import { TestBed } from '@angular/core/testing';

import { LocalStorageProjetosService } from './local-storage-projetos.service';

describe('LocalStorageProjetosService', () => {
  let service: LocalStorageProjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageProjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
