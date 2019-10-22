import { Component, OnInit } from '@angular/core';

import { NewTransaction } from 'src/app/shared/class/transaction/transaction';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
    transactions: Array<any> = new Array<any>();
    options: Array<string> = ['Compra', 'Venda'];
    model: NewTransaction = new NewTransaction(this.options[0], '', null);

    constructor(private storageService: StorageService) { }

    ngOnInit() {
        this.transactions = this.getData();
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
    }

    /**
     * Chama o serviço storageService para a função get
     */
    getData(): Array<NewTransaction> {
        return this.storageService.getData('Transações');
    }
}
