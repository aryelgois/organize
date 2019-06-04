import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQrCodePage } from './list-qr-code.page';

describe('ListQrCodePage', () => {
  let component: ListQrCodePage;
  let fixture: ComponentFixture<ListQrCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListQrCodePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
