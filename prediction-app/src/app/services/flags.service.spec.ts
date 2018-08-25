import { TestBed, inject } from '@angular/core/testing';

import { FlagsService } from './flags.service';

describe('FlagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlagsService]
    });
  });

  it('should be created', inject([FlagsService], (service: FlagsService) => {
    expect(service).toBeTruthy();
  }));
});
