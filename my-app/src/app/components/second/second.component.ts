import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { SenddataService } from '../../service/senddata.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Output() private numberGenerated2 = new EventEmitter<number>();
  constructor() { }

  @Input() users: any[];
  
  ngOnInit() {   
     this.users = [];      
  }
  deleteUseasdasdr(number){

    this.numberGenerated2.emit(number);
  }


}
