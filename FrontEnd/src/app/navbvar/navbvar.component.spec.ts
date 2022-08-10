import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbvarComponent } from './navbvar.component';

describe('NavbvarComponent', () => {
  let component: NavbvarComponent;
  let fixture: ComponentFixture<NavbvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
