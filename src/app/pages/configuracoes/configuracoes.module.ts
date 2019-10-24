import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { TableTransactionComponent } from './table-transaction';
import { FormAddTransactionComponent } from './form-add-transaction';

import { StorageService } from '../../shared/services/storage/storage.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    TableTransactionComponent,
    FormAddTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    StorageService
  ]
})
export class ConfiguracoesModule { }
