import { Component, OnInit } from '@angular/core';
import { ChangeItemMenuEvent } from '../../shared/interfaces/ChangeItemMenuEvent.interface';
import { TypeItemsMenu } from '../../shared/interfaces/TypeItemsMenu';

import { OptionsMenu } from './optionsMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemsMenu: Array<TypeItemsMenu> = OptionsMenu;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Método para fechar o menu ao clicar sobre um item no mesmo
   */
  closeMenu(): void {
    const inputMenu: HTMLInputElement = document.getElementsByClassName('input-menu')[0] as HTMLInputElement;
    if (inputMenu.checked === true) {
      inputMenu.checked = false;
    }
  }
}
