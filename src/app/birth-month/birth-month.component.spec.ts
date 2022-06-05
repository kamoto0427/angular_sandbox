import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthMonthComponent } from './birth-month.component';

describe('BirthMonthComponent', () => {
  let component: BirthMonthComponent;
  let fixture: ComponentFixture<BirthMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
