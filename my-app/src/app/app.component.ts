import { Component } from '@angular/core';

import { SenddataService } from './service/senddata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  todaydate;
   constructor(private myservice: SenddataService) {}
   ngOnInit() { 
      this.todaydate = this.myservice.showTodayDate(); 
   } 
}
