import { TestBed, inject } from '@angular/core/testing';

import { UnloadingSearchService } from './unloading-search.service';

describe('UnloadingSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnloadingSearchService]
    });
  });

  it('should be created', inject([UnloadingSearchService], (service: UnloadingSearchService) => {
    expect(service).toBeTruthy();
  }));
});
