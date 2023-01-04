import { TestBed } from '@angular/core/testing';

import { BprofileService } from './bprofile.service';

describe('BprofileService', () => {
  let service: BprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
