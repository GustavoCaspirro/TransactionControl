import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { OptionsTransaction } from 'src/app/shared/enums/options.enum';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-table-transaction',
  templateUrl: './table-transaction.component.html',
  styleUrls: ['./table-transaction.component.scss']
})
export class TableTransactionComponent implements OnInit, OnChanges {
  arrayTransaction: Array<NewTransaction> = new Array<NewTransaction>();
  result = 0;
  readonly keyLocalStorage = 'Transações';

  @Input()
  transaction: Array<NewTransaction>;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.arrayTransaction = this.getData();
    this.valueTotal();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.arrayTransaction = changes.transaction.currentValue;
    this.valueTotal();
  }

  /**
   * Chama o serviço storageService para a função removeItemData
   */
  removeItemData(indexItem: number): void {
    this.arrayTransaction = this.storageService.removeItemData(this.keyLocalStorage, indexItem);
    this.valueTotal();
  }

  /**
   * Chama o serviço storageService para a função removeData
   */
  removeData() {
    this.arrayTransaction = this.storageService.removeData(this.keyLocalStorage);
    this.valueTotal();
  }

  /**
   * Chama o serviço storageService para a função get
   */
  getData(): NewTransaction[] {
    return this.storageService.getData(this.keyLocalStorage);
  }

  /**
   * Calcula o valor total das transações;
   */
  valueTotal(): number {
    this.result = 0;

    this.arrayTransaction.forEach((transaction: NewTransaction) => {
      transaction.typeTransaction === OptionsTransaction.Compra ?
        this.result -= (+transaction.priceProduct) :
        this.result += transaction.priceProduct;
    }, 0);

    return this.result;
  }
}
