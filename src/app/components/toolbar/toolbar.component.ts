import { Component, OnInit } from '@angular/core';
import { BrushType } from 'src/app/enums/brush-type.enum';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBarComponent implements OnInit {

  BrushType = BrushType;

  brush: BrushType = BrushType.None;

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.BrushObservable.subscribe((brush: BrushType) => {
      this.brush = brush
    });
  }

  onNodeBrushClk() {
    if (this.brush == BrushType.None) {
      this.toolbarService.next(BrushType.Node);
      return;
    }

    this.toolbarService.next(BrushType.None);
  }

}
