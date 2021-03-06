import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointsPage } from './waypoints.page';

describe('WaypointsPage', () => {
  let component: WaypointsPage;
  let fixture: ComponentFixture<WaypointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
