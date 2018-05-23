import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  fireClientError() {
    // throw new Error('Client Error. Shit happens :)');
    // it is not defined, ups
    // return it;
  }

  fireServerError() {
    this.httpService
            .get('https://jsonplaceholder.typicode.com/1')
            .subscribe();
  }

  ngOnInit() {
  }

}
