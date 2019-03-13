import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragePage } from './beverage.page';

describe('BeveragePage', () => {
  let component: BeveragePage;
  let fixture: ComponentFixture<BeveragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
