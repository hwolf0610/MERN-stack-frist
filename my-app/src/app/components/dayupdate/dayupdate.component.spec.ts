import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayupdateComponent } from './dayupdate.component';

describe('DayupdateComponent', () => {
  let component: DayupdateComponent;
  let fixture: ComponentFixture<DayupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
