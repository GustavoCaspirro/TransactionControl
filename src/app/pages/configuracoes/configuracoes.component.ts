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

  options: Array<string> = ['Compra', 'Venda'];
  model: newTransaction = new newTransaction(this.options[0], '', null);
  result: number = 0;

  /**
   * Método para validação do formulário
   */
  onSubmit(): void {
    const dataTransaction: any = this.getData();

    const listProduct: any = {
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
  getData(): any {
    return this.storageService.getData('Transações');
  }

  /**
   * Calcula o valor total das transações;
   */
  valueTotal(): Number {
    let index: number = 0;
    const transactionLength: Number = this.transactions.length;
    for (index; index < transactionLength; index++) {
      if (index === 0) { this.result = 0; }
      this.transactions[index].priceProduct = parseFloat(this.transactions[index].priceProduct);
      if (this.transactions[index].typeTransaction === 'Compra') {
        this.result -= (+this.transactions[index].priceProduct);
      } else {
        this.result += this.transactions[index].priceProduct;
      }
    }
    return this.result;
  }

}
