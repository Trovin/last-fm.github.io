import { Component } from '@angular/core';

import { MAIN_MENU } from '@mocks/main-menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems = MAIN_MENU;

}
