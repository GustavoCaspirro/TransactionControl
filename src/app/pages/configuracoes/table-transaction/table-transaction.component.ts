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
  keyLocalStorage = 'Transações';

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

  /**
   * Chama o serviço storageService para a função removeItemData
   */
  removeItemData(indexItem: number): void {
    this.transactions = this.storageService.removeItemData(this.keyLocalStorage, indexItem);
    this.valueTotal();
  }

  /**
   * Chama o serviço storageService para a função removeData
   */
  removeData() {
    this.transactions = this.storageService.removeData(this.keyLocalStorage);
    this.valueTotal();
  }

  /**
   * Chama o serviço storageService para a função get
   */
  getData(): Array<NewTransaction> {
    return this.storageService.getData(this.keyLocalStorage);
  }

  /**
   * Calcula o valor total das transações;
   */
  valueTotal(): number {
  const transactionLength: number = this.transactions.length;

  if (transactionLength === 0) {
    return this.result = 0;
  }

  this.transactions.forEach((transaction: NewTransaction, index: number) => {
    if (index === 0) { this.result = 0; }

    transaction.priceProduct = transaction.priceProduct;

    if (transaction.typeTransaction === 'Compra') {
      this.result -= (+transaction.priceProduct);
    } else {
      this.result += transaction.priceProduct;
    }
  });

  return this.result;

  }
}
