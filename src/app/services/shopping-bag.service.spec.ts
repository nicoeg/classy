import { TestBed, inject } from '@angular/core/testing';

import { ShoppingBagService } from './shopping-bag.service';

describe('ShoppingBagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingBagService]
    });
  });

  it('should be created', inject([ShoppingBagService], (service: ShoppingBagService) => {
    expect(service).toBeTruthy();
  }));
});
