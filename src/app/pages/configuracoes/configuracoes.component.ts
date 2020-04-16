import { Component } from '@angular/core';
import { NewTransaction } from 'src/app/shared/class/transaction/transaction';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent {
  transactions: Array<NewTransaction> = new Array<NewTransaction>();

  constructor() { }

  reciverTransaction(responseTransaction: Array<NewTransaction>) {
    this.transactions = responseTransaction;
  }
}
