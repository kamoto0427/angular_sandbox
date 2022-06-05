import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthYearComponent } from './birth-year.component';

describe('BirthYearComponent', () => {
  let component: BirthYearComponent;
  let fixture: ComponentFixture<BirthYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
