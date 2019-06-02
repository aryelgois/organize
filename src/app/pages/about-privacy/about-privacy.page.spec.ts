import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPrivacyPage } from './about-privacy.page';

describe('AboutPrivacyPage', () => {
  let component: AboutPrivacyPage;
  let fixture: ComponentFixture<AboutPrivacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPrivacyPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
