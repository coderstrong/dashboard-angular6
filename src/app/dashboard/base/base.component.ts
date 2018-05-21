import { Component, OnInit } from '@angular/core';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [NgbDropdownConfig]
})
export class BaseComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}
