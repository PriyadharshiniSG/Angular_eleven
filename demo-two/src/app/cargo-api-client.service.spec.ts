import { TestBed } from '@angular/core/testing';

import { CargoApiClientService } from './cargo-api-client.service';

describe('CargoApiClientService', () => {
  let service: CargoApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
