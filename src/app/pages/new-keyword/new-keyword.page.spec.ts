import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKeywordPage } from './new-keyword.page';

describe('NewKeywordPage', () => {
  let component: NewKeywordPage;
  let fixture: ComponentFixture<NewKeywordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewKeywordPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKeywordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
