import { TestBed, inject } from '@angular/core/testing';

import { AnimatemessageService } from './animatemessage.service';

describe('AnimatemessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimatemessageService]
    });
  });

  it('should be created', inject([AnimatemessageService], (service: AnimatemessageService) => {
    expect(service).toBeTruthy();
  }));
});
