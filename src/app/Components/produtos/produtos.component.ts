import { ProdutoService } from './../../Services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = [
    {
        "nome": "Gubee Integrador - teste",
        "descricao": "Ferramenta de integração para marketplaces",
        "mercadoAlvo": {
            "1": "Ecommerce",
            "2": "ERP",
            "3": "Lojista que não desejam possuir ecommerce"
        },
        "tecnologia": [
            "Java 11",
            "Kotlin",
            "Kafka"
        ]
    }]

  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];

  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(){
    this.listar();

    this.selectedCategories = this.categories.slice(1,3);
  }

  listar(){
    this.produtoService.listar()
      .then(produtos => this.produtos = produtos);
  }
}
