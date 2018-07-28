import { TestBed, inject } from '@angular/core/testing';

import { MtgRestApiService } from './mtg-rest-api.service';

describe('MtgRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MtgRestApiService]
    });
  });

  it('should be created', inject([MtgRestApiService], (service: MtgRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
