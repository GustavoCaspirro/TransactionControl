import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Método para fechar o menu ao clicar sobre um item no mesmo
   */
  closeMenu() {
    const inputMenu: HTMLInputElement = document.getElementsByClassName('input-menu')[0] as HTMLInputElement;
    if(inputMenu.checked === true) {
      inputMenu.checked = false;
    }
  }

}
