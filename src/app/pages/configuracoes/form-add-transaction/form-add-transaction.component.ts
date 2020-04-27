import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { OptionsTransaction } from 'src/app/shared/enums/options.enum';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-form-add-transaction',
  templateUrl: './form-add-transaction.component.html',
  styleUrls: ['./form-add-transaction.component.scss']
})
export class FormAddTransactionComponent implements OnInit {
  arrayTransaction: Array<NewTransaction> = new Array<NewTransaction>();
  options = Object.keys(OptionsTransaction);
  model: NewTransaction = new NewTransaction(this.options[0], '', null);

  @Input()
  transaction: Array<NewTransaction>;

  @Output()
  responseTransaction = new EventEmitter();

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.arrayTransaction = this.getData();
  }

  /**
   * Chama o serviço storageService para a função get
   */
  getData(): NewTransaction[] {
    return this.storageService.getData('Transações');
  }

  /**
   * Validação do formulário
   */
  onSubmit(): void {
    const dataTransaction: NewTransaction[] = this.getData();

    const listProduct: NewTransaction = {
      typeTransaction: this.model.typeTransaction,
      nameProduct: this.model.nameProduct,
      priceProduct: this.model.priceProduct
    };

    dataTransaction.unshift(listProduct);
    this.storageService.setData('Transações', dataTransaction);
    this.arrayTransaction = this.getData();
    this.responseTransaction.emit(this.arrayTransaction);
  }
}
