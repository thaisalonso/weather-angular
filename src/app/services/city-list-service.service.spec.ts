import { TestBed, inject } from '@angular/core/testing';

import { CityListService } from './city-list.service';

describe('CityListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityListService]
    });
  });

  it('should be created', inject([CityListService], (service: CityListService) => {
    expect(service).toBeTruthy();
  }));
});
