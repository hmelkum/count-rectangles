/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrushService } from './brush.service';

describe('Service: Brush', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrushService]
    });
  });

  it('should ...', inject([BrushService], (service: BrushService) => {
    expect(service).toBeTruthy();
  }));
});
