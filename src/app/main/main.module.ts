import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CellComponent } from './components/cell/cell.component';
import { ModalInitComponent } from './components/modal-init/modal-init.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalLoseComponent } from './components/modal-lose/modal-lose.component';
import { ModalWinComponent } from './components/modal-win/modal-win.component';


@NgModule({
  declarations: [
    MainComponent,
    CellComponent,
    ModalInitComponent,
    ModalLoseComponent,
    ModalWinComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MainModule { }
