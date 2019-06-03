import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeywordsPage } from './product-keywords.page';

describe('ProductKeywordsPage', () => {
  let component: ProductKeywordsPage;
  let fixture: ComponentFixture<ProductKeywordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductKeywordsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductKeywordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
