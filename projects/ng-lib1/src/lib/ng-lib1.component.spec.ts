import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLib1Component } from './ng-lib1.component';

describe('NgLib1Component', () => {
  let component: NgLib1Component;
  let fixture: ComponentFixture<NgLib1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgLib1Component]
    });
    fixture = TestBed.createComponent(NgLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
