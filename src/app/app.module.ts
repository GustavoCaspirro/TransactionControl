import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';
import { ResumoComponent } from './pages/resumo';
import { DashboardComponent } from './pages/dashboard';
import { ConfiguracoesComponent } from './pages/configuracoes';
import { MenuComponent } from './layout/menu';
import { TableTransactionComponent } from './pages/configuracoes/table-transaction';
import { FormAddTransactionComponent } from './pages/configuracoes/form-add-transaction';
import { StorageService } from './shared/services/storage/storage.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumoComponent,
    DashboardComponent,
    ConfiguracoesComponent,
    MenuComponent,
    TableTransactionComponent,
    FormAddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
