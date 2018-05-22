import { Component, OnInit } from '@angular/core';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [NgbDropdownConfig]
})

export class BaseComponent implements OnInit {

  public navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(private sidebarService: SidebarService, config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
    config.autoClose = true;

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
    this.getNavItems();
  }

  getNavItems(): void {
    this.navItems = this.sidebarService.getNavItems();
  }
}
