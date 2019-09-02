import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /**
   * getData no LocalStorage
   * @param key Nome da chave cujo valor quer obter
   */
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  /**
   * setData no LocalStorage
   * @param key Nome da chave que você deseja criar ou alterar.
   * @param data Valor da chave que você está criando ou atualizando.
   */
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
