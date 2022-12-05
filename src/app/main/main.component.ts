import { Component, OnInit, Inject } from '@angular/core';
import { Board } from '../utils/board';
import { Cell } from '../utils/cell';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalInitComponent } from './components/modal-init/modal-init.component';
import { DOCUMENT } from '@angular/common';
import { ModalLoseComponent } from './components/modal-lose/modal-lose.component';
import { ModalWinComponent } from './components/modal-win/modal-win.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  board: Board;
  minaLength : number = 0;
  cells : number = 10;
  mines : number = 50;
  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) { 
    
  }

  ngOnInit(): void {
    this.initDialog();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      setTimeout(() => {
        this.modalLose();
      }, 1000);
    } else if (result === 'win') {
      setTimeout(() => {
        this.modalWin();
      }, 1000);
    }
  }


  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(this.cells, this.mines);
    this.responsiveCell();
  }

  modalLose(){
    const dialogRef = this.dialog.open(ModalLoseComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reset();
    });
  }

  modalWin(){
    const dialogRef = this.dialog.open(ModalWinComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reset();
    });
  }
  

  initDialog(): void {
    const dialogRef = this.dialog.open(ModalInitComponent, {
      width: '500px',
      data: {cells : this.cells, mines : this.mines},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.cells = result.cellDimensions;
      this.mines = result.mines;
      this.board = new Board(result.cellDimensions, result.mines);
      this.minaLength = this.board.mineCount;
      this.responsiveCell();
    });
  }

  //Para mantener la cuadricula Responsive...
  responsiveCell(){
    setTimeout(() => {
      let widthd_celda = this.document.getElementById("cell-0-0")?.offsetWidth;
      for (let index = 0; index < this.document.getElementsByTagName('td').length; index++) {
        this.document.getElementsByTagName('td')[index].style.height = widthd_celda + 'px';
      }
      console.log('here!!', widthd_celda)
    }, 100);
  }

}
