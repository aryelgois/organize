import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverLoginPage } from './recover-login.page';

describe('RecoverLoginPage', () => {
  let component: RecoverLoginPage;
  let fixture: ComponentFixture<RecoverLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverLoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
