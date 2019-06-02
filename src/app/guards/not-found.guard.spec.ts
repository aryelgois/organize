import { async, inject, TestBed } from '@angular/core/testing';

import { NotFoundGuard } from './not-found.guard';

describe('NotFoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotFoundGuard],
    });
  });

  it('should ...', inject([NotFoundGuard], (guard: NotFoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
