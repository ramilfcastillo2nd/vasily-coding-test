import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lotto-dialog',
  templateUrl: './lotto-dialog.component.html',
  styleUrls: ['./lotto-dialog.component.css']
})
export class LottoDialogComponent {
  // constructor(
  //   public dialogRef: MatDialogRef<LottoDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    // this.dialogRef.close();
  }
}
