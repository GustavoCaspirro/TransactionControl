import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { StorageService } from '../../shared/services/storage/storage.service';
import { TableTransactionComponent } from './table-transaction';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    TableTransactionComponent
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
