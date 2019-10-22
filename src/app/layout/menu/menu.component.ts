import { Component, OnInit } from '@angular/core';
import { ChangeItemMenuEvent } from '../../shared/interfaces/ChangeItemMenuEvent.interface';
import { TypeItemsMenu } from '../../shared/interfaces/TypeItemsMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  itemsMenu: Array<TypeItemsMenu> = [
    {
      name: 'Resumo',
      rota: '/resumo'
    },
    {
      name: 'Dashboard',
      rota: '/dashboard'
    },
    {
      name: 'Configurações',
      rota: '/configuracoes'
    }
  ];
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
