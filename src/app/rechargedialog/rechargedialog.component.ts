import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../nav/nav.component';

@Component({
  selector: 'app-rechargedialog',
  templateUrl: './rechargedialog.component.html',
  styleUrls: ['./rechargedialog.component.scss']
})
export class RechargedialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
