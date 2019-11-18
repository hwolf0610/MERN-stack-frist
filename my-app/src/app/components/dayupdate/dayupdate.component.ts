import { Component, OnInit } from '@angular/core';

import { SenddataService } from '../../service/senddata.service';

@Component({
  selector: 'app-dayupdate',
  templateUrl: './dayupdate.component.html',
  styleUrls: ['./dayupdate.component.scss']
})
export class DayupdateComponent implements OnInit {
 
  newcomponent = "Entered in new component created"; 
  todaydate;
   constructor(private myservice: SenddataService) {}
   ngOnInit() { 
      this.todaydate = this.myservice.showTodayDate(); 
   } 

}
