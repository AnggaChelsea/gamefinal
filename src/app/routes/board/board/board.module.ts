import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketComponent } from '../../../components/board/bracket/bracket.component';
import { TeamallComponent } from '../../../components/board/teamall/teamall.component';
import { PlayerComponent } from '../../../components/board/player/player.component';
import { BoardComponent } from '../../../components/board/board.component';


import { BoardRoutingModule } from './board-routing.module';



@NgModule({
  declarations: [
    TeamallComponent,
    BracketComponent,
    PlayerComponent,
    BoardComponent
    ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
