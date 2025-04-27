import { TestBed } from '@angular/core/testing';

import { HttproutingserviceService } from './httproutingservice.service';

describe('HttproutingserviceService', () => {
  let service: HttproutingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttproutingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
