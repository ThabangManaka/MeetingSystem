import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingItemFormComponent } from './meeting-item-form.component';

describe('MeetingItemFormComponent', () => {
  let component: MeetingItemFormComponent;
  let fixture: ComponentFixture<MeetingItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
