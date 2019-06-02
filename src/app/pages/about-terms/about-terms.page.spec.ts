import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTermsPage } from './about-terms.page';

describe('AboutTermsPage', () => {
  let component: AboutTermsPage;
  let fixture: ComponentFixture<AboutTermsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTermsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
