import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQrScannerPage } from './list-qr-scanner.page';

describe('ListQrScannerPage', () => {
  let component: ListQrScannerPage;
  let fixture: ComponentFixture<ListQrScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListQrScannerPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQrScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
