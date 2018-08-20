import { TestBed, inject } from '@angular/core/testing';

import { VinoService } from './vino.service';

describe('VinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinoService]
    });
  });

  it('should be created', inject([VinoService], (service: VinoService) => {
    expect(service).toBeTruthy();
  }));
});
