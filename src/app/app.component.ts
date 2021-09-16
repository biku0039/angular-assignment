import { AfterContentInit, Component, ViewEncapsulation } from '@angular/core';
// import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterContentInit{
  title = 'assignment-angular';
  showLoader= false;
  // constructor(private loader: LoaderService){}
ngAfterContentInit(){
// this.loader.isLoading.subscribe((value: boolean)=>{
//   this.showLoader = value;
// });
}
}
