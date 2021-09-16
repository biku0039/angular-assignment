import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private users = new BehaviorSubject([]);
  sharedUserData = this.users.asObservable();
  private user = new BehaviorSubject({});
  sharedUser = this.user.asObservable();

  constructor() {}

  nextUserData(user: any) {
    this.users.next(user)
  }
  nextUser(user: any) {
    this.user.next(user)
  }
}
