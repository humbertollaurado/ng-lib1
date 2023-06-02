import { TestBed } from '@angular/core/testing';

import { NgLib1Service } from './ng-lib1.service';

describe('NgLib1Service', () => {
  let service: NgLib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
