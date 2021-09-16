import { Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ContactEditFormComponent } from '../modal/contact-edit-form/contact-edit-form.component';
import { ContactProfileComponent } from '../modal/contact-profile/contact-profile.component';
import { CrudService } from '../services/crud.service';
import { LoaderService } from '../services/loader.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListsComponent implements OnInit{
userData: any[] = [];

  constructor(public dialog: MatDialog,
     private  service: CrudService,
     private loader: LoaderService, 
     private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loader.showLoader();
    this.getAllUsers();
  
  }

  private getAllUsers() {
      this.service.getAllUsers().subscribe((data: any) => {  
        if(data.status === 200){
          this.loader.hideLoader(); 
          data.body.forEach((user: any) => {
            this.userData.push(user);
          });
        }
      });
  }

  openEditForm(index: any): void{
  console.log(index);
  this.sharedService.nextUser(index);
  this.dialog.open(ContactEditFormComponent,{
    panelClass:'add'
  });
  }
  onProfileView(index: any): void {
    console.log(index);
    this.sharedService.nextUser(index);
    this.dialog.open(ContactProfileComponent,{
      panelClass:'add-2'
    });
    // Swal.fire('Data deleted successfully','Deleted!','success');
  }
}
