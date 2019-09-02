import { Component, OnInit } from '@angular/core';

import { newTransaction } from 'src/app/shared/class/transaction/transaction';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  transactions: Array<any> = new Array<any>();

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.transactions = this.getData();
    this.valueTotal();
  }

  options = ['Compra', 'Venda'];
  model = new newTransaction(this.options[0], '', null);
  result = 0;

  /**
   * Método para validação do formulário
   */
  onSubmit() {
    const dataTransaction = this.getData();

    const listProduct = {
      typeTransaction: this.model.typeTransaction,
      nameProduct: this.model.nameProduct,
      priceProduct: this.model.priceProduct
    };

    dataTransaction.unshift(listProduct);
    this.storageService.setData('Transações', dataTransaction);
    this.transactions = this.getData();
    this.valueTotal();
  }

  /**
   * Método que chama o serviço storageService
   */
  getData() {
    return this.storageService.getData('Transações');
  }

  /**
   * Calcula o valor total das transações;
   */
  valueTotal() {
    let i = 0;
    const transactionLength = this.transactions.length;
    for (i; i < transactionLength; i++) {
      if (i === 0) { this.result = 0; }
      this.transactions[i].priceProduct = parseFloat(this.transactions[i].priceProduct);
      if (this.transactions[i].typeTransaction === 'Compra') {
        this.result -= (+this.transactions[i].priceProduct);
      } else {
        this.result += this.transactions[i].priceProduct;
      }
    }
    return this.result;
  }

}
