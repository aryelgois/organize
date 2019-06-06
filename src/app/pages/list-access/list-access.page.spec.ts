import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccessPage } from './list-access.page';

describe('ListAccessPage', () => {
  let component: ListAccessPage;
  let fixture: ComponentFixture<ListAccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAccessPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
