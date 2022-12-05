import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal-init',
  templateUrl: './modal-init.component.html',
  styleUrls: ['./modal-init.component.scss']
})
export class ModalInitComponent implements OnInit {

  configForm: FormGroup;
  validateNMinas :boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalInitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      console.log(data);
    this.configForm = this.fb.group({
      cellDimensions: [data.cells, Validators.required],
      mines: [data.mines, Validators.required],
    })
   }

  ngOnInit(): void {
    
  }

  initGame() {
    this.dialogRef.close(this.configForm.value);
  }

  ValidateField(value:any){
    console.log('value', value.target.value);
    this.configForm.patchValue({
      cellDimensions : value.target.value.replace(/[^0-9]/,'')
    });
  }

  ValidateField2(value:any){
    this.configForm.patchValue({
      mines : value.target.value.replace(/[^0-9]/,'')
    });
  }

  ValidateNminas(value:any){
    if(parseInt(value.target.value) > (this.configForm.value.cellDimensions*this.configForm.value.cellDimensions)*0.5){
      this.validateNMinas = true;
    }else{
      this.validateNMinas = false;
    }

  }


  resetForm(){
    console.log('resett');
    this.configForm.reset();
  }

  

}
