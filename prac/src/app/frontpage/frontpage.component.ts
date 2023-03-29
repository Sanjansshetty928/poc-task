import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontService } from '../frontService.service';
import { User } from '../user.model';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
data1?: User;
  constructor(private myService:FrontService){}
  ngOnInit(): void {
    this.myService.getDataFromModule1().subscribe((data) => {
      this.data1 = data;
      
      // console.log(this.data1);
      // this.data1['frLearner'];
    })
    // The subscribe method is called on the observable, which essentially registers a callback function to be called whenever new data is emitted by the observable.
    this.myService.getDataFromModule1().subscribe((data) => {
      this.data1 = data;
      // console.log(this.data1);
      // this.data1['frLearner'];
    })

  }

}
