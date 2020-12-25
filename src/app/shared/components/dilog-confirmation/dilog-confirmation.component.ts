import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dilog-confirmation',
  templateUrl: './dilog-confirmation.component.html',
  styleUrls: ['./dilog-confirmation.component.scss']
})
export class DilogConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DilogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  onCancelClick(): void {
    this.dialogRef.close('Cancel');
  }
  onConfirmClick(): void {
    this.dialogRef.close('Confirm');
  }
  ngOnInit() {
    console.log(this.data);
  }
}
