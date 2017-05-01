import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-ng-if-and-asynchronisme',
  templateUrl: './ng-if-and-asynchronisme.component.html',
  styleUrls: ['./ng-if-and-asynchronisme.component.css']
})
export class NgIfAndAsynchronismeComponent implements OnInit {

  user: Observable<{}>;

  constructor() { }

  ngOnInit() {    
    this.user = this.getAsyncData();
  }
  
  getAsyncData() {
    return Observable.of({ firstName: 'Yohann', lastName: 'Atticot Dit Ravino' }).delay(2000);
  }

}
