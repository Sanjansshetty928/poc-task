import { Component, OnInit } from '@angular/core';
import { FrontService } from '../frontService.service';
import { User } from '../user.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  data1?: User;//stores the value of data type user
  constructor(private myService:FrontService){}
  ngOnInit(): void {
    this.myService.getDataFromModule1().subscribe((data) => {
      this.data1 = data;
      
      // console.log(this.data1);
      // this.data1['frLearner'];
    })
    // The subscribe method is called on the observable, which essentially registers a callback function to be called whenever new data is emitted by the observable.
    // this.myService.getDataFromModule1().subscribe((data) => {
    //   this.data1 = data;
    //   // console.log(this.data1);
    //   // this.data1['frLearner'];
    // })

  }

}
