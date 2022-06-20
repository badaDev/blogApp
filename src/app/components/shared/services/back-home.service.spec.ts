import { TestBed } from '@angular/core/testing';

import { BackHomeService } from './back-home.service';

describe('BackHomeService', () => {
  let service: BackHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
