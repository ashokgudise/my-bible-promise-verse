import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { DilogConfirmationComponent } from './components/dilog-confirmation/dilog-confirmation.component';

@NgModule({
  declarations: [SidenavComponent, DilogConfirmationComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [SidenavComponent]
})
export class SharedModule { }
