import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';
import { SharedService } from 'src/app/services/shared.service';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-add-form',
  templateUrl: './contact-add-form.component.html',
  styleUrls: ['./contact-add-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactAddFormComponent implements OnInit {
  profileForm: FormGroup;
  
  constructor(private crudService: CrudService,
     public dialogRef: MatDialogRef<ContactAddFormComponent>,
     private sharedService: SharedService,
     @Inject(DOCUMENT) private document: Document
      ) {
    // initiate formgroup
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]),
      dob: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.crudService.postUser(this.profileForm.value).subscribe((response: any)=>{
      if(response.status === 200){
        this.getUsers();
        Swal.fire('Data added successfully','Success!','success');
        this.close();
        this.profileForm.reset();
        this.document.location.reload(); 
      }
    });
  }
  getUsers(): void{
    this.crudService.getAllUsers().subscribe((response: any)=>{
      this.sharedService.nextUserData(response.body);
    });
  }
  close(){
    this.dialogRef.close();
  }
}


