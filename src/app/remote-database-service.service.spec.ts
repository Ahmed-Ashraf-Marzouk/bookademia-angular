import { TestBed } from '@angular/core/testing';

import { RemoteDatabaseServiceService } from './remote-database-service.service';

describe('RemoteDatabaseServiceService', () => {
  let service: RemoteDatabaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteDatabaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
