import { ProdutoService } from './../../Services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = []

  loading: boolean = true;

  selecionarTecnologias: any[] = [];

  tecnologias: any[] = [];

  mercadosAlvo: any[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(){
    this.listar();

    this.listarTecnologias();

    this.listarMercadoAlvo();
  }

  listar(){
    this.produtoService.listar()
      .then(produtos => this.produtos = produtos);
  }

  listarMercadoAlvo(){
    this.produtoService.listarMercadoAlvo()
       .then(mercadosAlvo => this.mercadosAlvo = mercadosAlvo);
  }


    listarTecnologias(){
      this.produtoService.listarTecnologias()
         .then(tecnologias => this.tecnologias = tecnologias);
  }


}
