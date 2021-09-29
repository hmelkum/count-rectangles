import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BrushType } from '../enums/brush-type.enum';

@Injectable({
  providedIn: 'root'
})
export class BrushService {

  private subject: Subject<BrushType>;

  constructor() {
    this.subject = new Subject<BrushType>();
  }

  get Observable(): Observable<BrushType> {
    return this.subject;
  }

  public next(type: BrushType) {
    this.subject.next(type);
  }
}
