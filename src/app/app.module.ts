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
import { ControlsComponent } from './pages/controls/controls.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ToolsComponent } from './pages/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    BackgroundComponent,
    BoardComponent,
    NodeComponent,
    EraserComponent,
    TileComponent,
    ToolBarComponent,

    // Pages
    LandingComponent,
    IntroComponent,
    ToolsComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
