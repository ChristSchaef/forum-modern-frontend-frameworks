import { TestBed } from '@angular/core/testing';

import { SettingsPersistenceService } from './settings-persistence.service';

describe('SettingsPersistenceService', () => {
  let service: SettingsPersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsPersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
