import { TestBed } from '@angular/core/testing';

import { MeetingItemService } from './meeting-item.service';

describe('MeetingItemService', () => {
  let service: MeetingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
