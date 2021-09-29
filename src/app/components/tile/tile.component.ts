import { Component, OnInit } from '@angular/core';
import { BrushType } from 'src/app/enums/brush-type.enum';
import { BrushService } from 'src/app/services/brush.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  BrushType = BrushType
  brush: BrushType = BrushType.None;
  isSelected: boolean = false;
  isHovered: boolean = false;

  constructor(private brushService: BrushService) { }

  ngOnInit() {
    this.brushService.Observable.subscribe((brush:BrushType)=>{
      if (brush == BrushType.Fill) {
        this.isSelected = true;
      }
      else if (brush == BrushType.Clear) {
        this.isSelected = false;
      }
      else {
        this.brush = brush;
      }
    });
  }

  onTileClk() {
    if(this.brush == BrushType.Node) {
      this.isSelected = true;
    }
    else if (this.brush == BrushType.Eraser) {
      this.isSelected = false;
    }
  }

  onTileMouseEnter() {
    this.isHovered = true;
  }

  onTileMouseLeave() {
    this.isHovered = false;
  }
}
