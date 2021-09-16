import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactAddFormComponent } from './modal/contact-add-form/contact-add-form.component';
import { ContactEditFormComponent } from './modal/contact-edit-form/contact-edit-form.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { HttpInterceptorInterceptor } from './services/http-interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { DateConvertPipe } from './pipes/date-convert.pipe';
import { ContactProfileComponent } from './modal/contact-profile/contact-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactAddFormComponent,
    ContactEditFormComponent,
    UserListsComponent,
    DateConvertPipe,
    ContactProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule ,
    ReactiveFormsModule
  ],
  providers: [
    DateConvertPipe,
    {
    provide:HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
