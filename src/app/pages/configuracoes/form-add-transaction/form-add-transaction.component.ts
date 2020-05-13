import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { OptionsTransaction } from 'src/app/shared/enums/options.enum';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-form-add-transaction',
  templateUrl: './form-add-transaction.component.html',
  styleUrls: ['./form-add-transaction.component.scss'],
})
export class FormAddTransactionComponent implements OnInit, OnChanges {
  arrayTransaction: Array<NewTransaction> = new Array<NewTransaction>();
  options = Object.keys(OptionsTransaction);
  model: NewTransaction = new NewTransaction(this.options[0], '', null);
  modoEditar = false;

  @Input()
  transaction: Array<NewTransaction>;

  @Input()
  itemEditado: object;

  @Output()
  responseTransaction = new EventEmitter();

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.arrayTransaction = this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    this.model.typeTransaction =
      changes.itemEditado?.currentValue?.item?.typeTransaction;
    this.model.nameProduct =
      changes.itemEditado?.currentValue?.item?.nameProduct;
    this.model.priceProduct =
      changes.itemEditado?.currentValue?.item?.priceProduct;

    this.editarItem(changes.itemEditado?.currentValue?.item);
  }

  editarItem(item: NewTransaction) {
    this.modoEditar = true;

    this.model.typeTransaction = item?.typeTransaction;
    this.model.nameProduct = item?.nameProduct;
    this.model.priceProduct = item?.priceProduct;
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
    this.arrayTransaction = this.getData();

    const listProduct: NewTransaction = {
      typeTransaction: this.model.typeTransaction,
      nameProduct: this.model.nameProduct,
      priceProduct: this.model.priceProduct,
    };

    this.arrayTransaction.unshift(listProduct);
    this.storageService.setData('Transações', this.arrayTransaction);
    this.responseTransaction.emit(this.arrayTransaction);
  }
}
