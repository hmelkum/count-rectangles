import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrushType } from '../enums/brush-type.enum';
import { BrushService } from './brush.service';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private brushObservable: Observable<BrushType>;

  constructor(private brushService: BrushService) {
    this.brushObservable = brushService.Subject;
  }

  get BrushObservable(): Observable<BrushType> {
    return this.brushObservable;
  }

  public next(type: BrushType) {
    this.brushService.next(type);
  }
}
