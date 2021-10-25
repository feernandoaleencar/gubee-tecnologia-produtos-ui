import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoUrl = 'http://localhost:8080/produtos';

  constructor(private Http: HttpClient) { }

  listar(): Promise<any> {

    return this.Http.get(`${this.produtoUrl}`)
      .toPromise()
      .then(response => response)


  }
}
