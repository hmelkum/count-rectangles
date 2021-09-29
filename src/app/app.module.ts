import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { BoardComponent } from './components/board/board.component';
import { EraserComponent } from './components/eraser/eraser.component';
import { NodeComponent } from './components/node/node.component';
import { TileComponent } from './components/tile/tile.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    BoardComponent,
    NodeComponent,
    EraserComponent,
    TileComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
