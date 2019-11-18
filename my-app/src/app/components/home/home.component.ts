import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { SenddataService } from '../../service/senddata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() private numberGenerated = new EventEmitter<number>();
 
  public message = "Save Successful!";

   all_users: any[];
   filtered_users: any[];
  counter: number;


  
  constructor( private myservice: SenddataService) { }
 

  ngOnInit() {  
     this.counter = 0
     this.all_users = [];
     this.filtered_users = [];
      this.getAllData();
  }

  getAllData(){     
    this.myservice.getAllUsers().subscribe(data => {     
      console.log('data', data); 
      if(data.length>0){
        this.counter = data.length
         this.all_users = data;
         this.filtered_users = data;
      }
    })
   }
   
   deleteonerecode(id: number){
    console.log(id);
    this.myservice.deleteUser(id).subscribe(data => {
      this.getAllData();
    })
   }
   filter(){
     this.filtered_users = this.all_users.slice(0, this.counter);
   }


}

