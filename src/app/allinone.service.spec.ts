import { TestBed } from '@angular/core/testing';

import { AllinoneService } from './allinone.service';

describe('AllinoneService', () => {
  let service: AllinoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllinoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
