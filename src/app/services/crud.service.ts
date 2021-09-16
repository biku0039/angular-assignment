import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs'
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  getHeader(){
    return new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  }
  getAllUsers(){
    return this.http.get('/api/People', {headers: this.getHeader(), observe:'response'}).
     pipe(
      catchError(this.handleError)
    );
  }
  postUser(user: FormData){
    return this.http.post('/api/People', user, { headers: this.getHeader(), observe:'response' }).pipe(catchError(this.handleError));
  }
 getUser(id: number){
  return this.http.get('/api/People', {headers: this.getHeader(), observe:'response', params: {id}}).
  pipe(
   catchError(this.handleError)
 );
 }
 editUser(id: number, user: FormData){
  return this.http.patch(`/api/People/${id}`,user, {headers: this.getHeader(), observe:'response'}).
  pipe(
   catchError(this.handleError)
 );
 }
  private handleError(error: HttpErrorResponse) {
   
    if (error.status === 500) {
      // A client-side or network error occurred. Handle it accordingly.
      Swal.fire( `${error.status}`,error.statusText,'error');
    } 
    else if (error.status === 404) {
      // A client-side or network error occurred. Handle it accordingly.
      Swal.fire( `${error.status}`,error.statusText,'error');
    } 
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      Swal.fire( `${error.status}`,error.statusText,'error');
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later...');
  }
}



