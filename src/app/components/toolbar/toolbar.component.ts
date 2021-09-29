import { Component, OnInit } from '@angular/core';
import { BrushType } from 'src/app/enums/brush-type.enum';
import { BrushService } from 'src/app/services/brush.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBarComponent implements OnInit {

  BrushType = BrushType;

  brush: BrushType = BrushType.None;

  constructor(private brushService: BrushService) {
  }

  ngOnInit() {
    this.brushService.Observable.subscribe((brush: BrushType) => {
      this.brush = brush
    });
  }

  onNodeBrushClk() {
    if (this.brush != BrushType.Node) {
      this.brushService.next(BrushType.Node);
      return;
    }

    this.brushService.next(BrushType.None);
  }

  onEraserBrushClk() {
    if (this.brush != BrushType.Eraser) {
      this.brushService.next(BrushType.Eraser);
      return;
    }

    this.brushService.next(BrushType.None);
  }

  onFillBrushClk(){
    this.brushService.next(BrushType.Fill);
    this.brushService.next(BrushType.None);
  }

  onClearBrushClk() {
    this.brushService.next(BrushType.Clear)
    this.brushService.next(BrushType.None);
  }
}
