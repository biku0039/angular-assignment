import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss']
})
export class ContactProfileComponent implements OnInit {
  userData: any;

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedUser.subscribe((user: any)=>{
      this.userData = user;
    });
    
   }

  ngOnInit(): void {
  }

}
