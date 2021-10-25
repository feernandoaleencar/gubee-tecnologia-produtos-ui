import { Injectable } from '@angular/core';
import {HttpClientModule, HttpParams} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoUrl = 'http://localhost:8080/produtos';
  tecnologiaUrl = 'http://localhost:8080/tecnologias';
  mercadoAlvoUrl = 'http://localhost:8080/mercadosAlvo';
  filtrarPorTecnologia = 'http://localhost:8080/produtos/tecnologias/'

  constructor(private Http: HttpClient) { }

  listar(): Promise<any> {

    return this.Http.get(`${this.produtoUrl}`)
      .toPromise()
      .then(response => response)


  }

  listarMercadoAlvo(): Promise<any> {

    return this.Http.get(`${this.mercadoAlvoUrl}`)
      .toPromise()
      .then(response => response)
  }

  listarTecnologias(): Promise<any> {

    return this.Http.get(`${this.tecnologiaUrl}`)
      .toPromise()
      .then(response => response)
  }
}
