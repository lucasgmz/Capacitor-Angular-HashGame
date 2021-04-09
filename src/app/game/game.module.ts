import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeMenuComponent } from './components/ge-menu/ge-menu.component';
import { GameRoutingModule } from './components/game-routing.module';
import { GePlayComponent } from './components/ge-play/ge-play.component';



@NgModule({
  declarations: [GeMenuComponent, GePlayComponent],
  imports: [
    GameRoutingModule,
    CommonModule
  ]
})
export class GameModule { }
