import { Injectable } from '@angular/core';
import { NewTransaction } from '../../class/transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /**
   * getData no LocalStorage
   * @param key Nome da chave cujo valor quer obter
   */
  getData(key: string): NewTransaction[] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  /**
   * setData no LocalStorage
   * @param key Nome da chave que você deseja criar ou alterar.
   * @param data Valor da chave que você está criando ou atualizando.
   */
  setData(key: string, data: NewTransaction[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * removeItemData no LocalStorage
   * @param key Nome da chave que você deseja remover um item.
   * @param indexItem Posição do item da chave que você está apagando.
   */
  removeItemData(key: string, indexItem: number): NewTransaction[] {
    const transactionCurrent = this.getData(key);

    transactionCurrent.splice(indexItem, 1);
    this.setData(key, transactionCurrent);
    return transactionCurrent;
  }

  /**
   * removeData no LocalStorage
   * @param key Nome da chave que você deseja remover.
   */
  removeData(key: string): NewTransaction[] {
    localStorage.removeItem(key);
    const transactionCurrent = this.getData(key);
    return transactionCurrent;
  }
}
