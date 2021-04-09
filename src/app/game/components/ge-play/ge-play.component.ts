import { Component, OnInit } from '@angular/core';
import { HashRow } from 'src/app/core/Models/hash-row';

@Component({
  selector: 'app-ge-play',
  templateUrl: './ge-play.component.html',
  styleUrls: ['./ge-play.component.css']
})
export class GePlayComponent implements OnInit {

  totalClicks : number = 0;
  hashRowList : HashRow[];
  hasWinner : Boolean;

  winnerMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  constructor() {}

  ngOnInit(): void {
    // this.hashRowList = [];
    this.reloadHashRows();
  }

  private reloadHashRows(){
    this.hashRowList = [];
    this.totalClicks = 0;
    this.hasWinner = false;

    for (let index = 0; index < 9; index++) {
      this.hashRowList.push({winner: false});
    }
    
  }

  addResult(hashRow : HashRow){
    if(!hashRow.value && !this.hasWinner){
      var value = (this.totalClicks % 2 == 0) ? "X" : "O";
      hashRow.value = value;
      this.totalClicks++;
      this.checkForWinner(hashRow.value)
    } else {
      this.reloadHashRows();
    }
  }

  checkForWinner(value : String){
    this.winnerMatrix.forEach(indexMatrix => {
      var winnerCount = 0;
      indexMatrix.forEach(index => {
        if (this.hashRowList[index].value === value){
          winnerCount++;
        }
      });
      if (winnerCount == 3){
        this.showWinner(indexMatrix);
      }
    });
  }

  showWinner(indexMatrix: number[]) {
    indexMatrix.forEach(index => this.hashRowList[index].winner = true);
    this.hasWinner = true;
  }
}
