import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestT1Component } from './test-t1.component';

describe('TestT1Component', () => {
  let component: TestT1Component;
  let fixture: ComponentFixture<TestT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
