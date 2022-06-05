import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthSelectComponent } from './birth-select.component';

describe('BirthSelectComponent', () => {
  let component: BirthSelectComponent;
  let fixture: ComponentFixture<BirthSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
