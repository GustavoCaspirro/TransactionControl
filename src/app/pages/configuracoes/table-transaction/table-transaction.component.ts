import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-table-transaction',
  templateUrl: './table-transaction.component.html',
  styleUrls: ['./table-transaction.component.scss']
})
export class TableTransactionComponent implements OnInit, OnChanges {
  transactions: Array<NewTransaction> = new Array<NewTransaction>();
  result = 0;
  @Input()
  transaction: Array<NewTransaction>;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.transactions = this.transaction;
    this.transactions = this.getData();
    this.valueTotal();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.transactions = changes.transaction.currentValue;
    this.transactions = this.getData();
    this.valueTotal();
  }

  removeData(item, transactions) {
    console.log(item, transactions);
  }

  /**
   * Chama o serviço storageService para a função get
   */
  getData(): Array<NewTransaction> {
    return this.storageService.getData('Transações');
  }

  /**
   * Calcula o valor total das transações;
   */
  valueTotal(): number {
  let index = 0;
  const transactionLength: number = this.transactions.length;
  for (index; index < transactionLength; index++) {
    if (index === 0) { this.result = 0; }
    this.transactions[index].priceProduct = this.transactions[index].priceProduct;
    if (this.transactions[index].typeTransaction === 'Compra') {
        this.result -= (+this.transactions[index].priceProduct);
    } else {
        this.result += this.transactions[index].priceProduct;
    }
  }
  return this.result;
  }
}
