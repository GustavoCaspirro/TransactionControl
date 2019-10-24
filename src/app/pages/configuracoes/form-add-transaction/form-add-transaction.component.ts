import { Component, OnInit, SimpleChanges, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-form-add-transaction',
  templateUrl: './form-add-transaction.component.html',
  styleUrls: ['./form-add-transaction.component.scss']
})
export class FormAddTransactionComponent implements OnInit, OnChanges {
    transactions: Array<NewTransaction> = new Array<NewTransaction>();
    options: Array<string> = ['Compra', 'Venda'];
    model: NewTransaction = new NewTransaction(this.options[0], '', null);
    @Input()
    transaction: Array<NewTransaction>;
    @Output() responseTransaction = new EventEmitter();

    constructor(private storageService: StorageService) { }

    ngOnInit() {
        this.transactions = this.getData();
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
    }

    /**
     * Chama o serviço storageService para a função get
     */
    getData(): Array<NewTransaction> {
        return this.storageService.getData('Transações');
    }

    /**
     * Validação do formulário
     */
    onSubmit(): void {
        const dataTransaction: Array<NewTransaction> = this.getData();

        const listProduct: NewTransaction = {
            typeTransaction: this.model.typeTransaction,
            nameProduct: this.model.nameProduct,
            priceProduct: this.model.priceProduct
        };

        dataTransaction.unshift(listProduct);
        this.storageService.setData('Transações', dataTransaction);
        this.transactions = this.getData();
        this.responseTransaction.emit(this.transactions);
    }
}
