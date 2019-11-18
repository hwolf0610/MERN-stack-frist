import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SenddataService } from '../../service/senddata.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
  @Output() private numberGenerated = new EventEmitter<number>();
 
  public message = "Save Successful!";
  name: string;
  age: number;
  sex: string;
  major: string;
  major_list: string[];
  sex_list: string[];
  users: any[];
  constructor(private myservice: SenddataService) { }

  saveDataToDB() {
    let user = { name: this.name, sex: this.sex, age: this.age, major: this.major };
    console.log(user);
    this.myservice.saveUser(user).subscribe((data) => {
      alert(this.message);     
      this.numberGenerated.emit();
    })
  }

  ngOnInit() {
    this.name = '';
    this.age = null;
    this.sex = 'male';
    this.major = 'physics';
    this.major_list = ['physics', 'mathematics', 'chemistry', 'english', 'infrared', 'nightsenser'];
    this.sex_list = ['male', 'female'];
    this.users = [];
    // this.getAllData();
  }
  // getAllData() {

  //   this.myservice.getAllUsers().subscribe(data => {
  //     console.log('data', data);
  //     if (data.length > 0) {
  //       this.users = data;
  //     }
  //   })
  // }

  // deleteUseasdasdr(id: number) {
  //   console.log(id);
  //   this.myservice.deleteUser(id).subscribe(data => {
  //     this.getAllData();
  //   })
  // }

}
