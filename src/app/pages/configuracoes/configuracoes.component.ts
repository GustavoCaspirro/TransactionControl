import { Component, OnInit } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
    transactions: Array<NewTransaction> = new Array<NewTransaction>();

    constructor() { }

    ngOnInit() {
    }

    reciverTransaction(responseTransaction) {
        this.transactions = responseTransaction;
    }
}
