import { Component, OnInit } from '@angular/core';
import { AnimatemessageService } from '../../core/notifications/animatemessage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private message: AnimatemessageService
  ) { }

  fireClientError() {
    // throw new Error('Client Error. Shit happens :)');
    // it is not defined, ups
    // return it.hnad;
    this.message.showWarning('Error title', 'hello');
    // return 5 / ix; // r is not defined === ReferenceError
  }

  fireServerError() {
    this.message.showWarning('showWarning title', 'hello');
    this.message.showError('showError title', 'hello');
    this.message.showInfo('showInfo title', 'hello');
    this.message.showSuccess('showSuccess title', 'hello');
  }

  ngOnInit() {

  }

}
