import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alram',
  templateUrl: './alram.component.html',
  styleUrls: ['./alram.component.scss']
})
export class AlramComponent implements OnInit {
  newcomponent = "Entered in new component created";
   // declared array of months. 
   months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];
  constructor() { }

  ngOnInit() {
  }
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }
 changemonths(event) {
  
  alert("Changed month from the Dropdown");
  console.log(event);
}

}
