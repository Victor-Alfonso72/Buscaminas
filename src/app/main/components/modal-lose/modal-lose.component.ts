import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-lose',
  templateUrl: './modal-lose.component.html',
  styleUrls: ['./modal-lose.component.scss']
})
export class ModalLoseComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalLoseComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
