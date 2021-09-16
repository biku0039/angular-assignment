import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit-form.component.html',
  styleUrls: ['./contact-edit-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEditFormComponent implements OnInit {
user: any;
profileForm: FormGroup;
  constructor(private sharedService: SharedService,
     private crudService: CrudService,
     public dialogRef: MatDialogRef<ContactEditFormComponent>,
      @Inject(DOCUMENT) private document: Document) {
    this.sharedService.sharedUser.subscribe((user: any)=>{
      this.user = user;
    });
    
    const date = new Date(this.user.dob);
    this.profileForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]),
      dob: new FormControl(new Date(this.user.dob).toISOString().substr(0, 10), [Validators.required]),
      country: new FormControl(this.user.country, [Validators.required]),
      avatar: new FormControl(this.user.avatar, [Validators.required])
    });
   }

  ngOnInit(): void {}
  onSubmit(): void {
    this.crudService.editUser(this.user.id, this.profileForm.value).subscribe((response: any)=>{
      if(response.status ===200){
        Swal.fire('Data edited successfully','Success!','success');
        this.close();
        this.document.location.reload(); 

      }
    });
  }
  close(){
    this.dialogRef.close();
  }

}
