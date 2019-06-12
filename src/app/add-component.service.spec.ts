import { TestBed } from '@angular/core/testing';

import { AddComponentService } from './add-component.service';

describe('AddComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddComponentService = TestBed.get(AddComponentService);
    expect(service).toBeTruthy();
  });
});
