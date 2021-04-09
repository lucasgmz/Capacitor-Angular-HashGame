import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeMenuComponent } from './ge-menu/ge-menu.component';
import { GePlayComponent } from './ge-play/ge-play.component';

const routes: Routes = [
  {
    path: '',
    component: GeMenuComponent
  },
  {
    path: 'play',
    component: GePlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
