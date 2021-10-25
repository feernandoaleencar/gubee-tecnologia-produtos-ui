import { ProdutoService } from './Services/produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProdutosComponent } from './Components/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
