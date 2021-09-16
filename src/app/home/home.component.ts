import {  Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactAddFormComponent } from '../modal/contact-add-form/contact-add-form.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit  {
allData: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}


 openForm(): void{
   this.dialog.open(ContactAddFormComponent,{
     panelClass:'add'
   });
 }

}
