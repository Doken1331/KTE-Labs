import { TestBed } from '@angular/core/testing';

import { itemService } from './itemService.service';

describe('itemService', () => {
  let service: itemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(itemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
