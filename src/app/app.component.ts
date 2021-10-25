import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  produtos = [
    {
      nome: 'Gubee Integrador - teste',
      descricao: 'Ferramenta de integração para marketplaces',
      mercadoAlvo: [
        'Ecommerce',
        'ERP',
        'Lojista que não desejam possuir ecommerce',
      ],
      tecnologia: ['Java 11', 'Kotlin', 'Kafka'],
    },
    {
      nome: 'Gubee Integrador - teste',
      descricao: 'Ferramenta de integração para marketplaces - teste',
      mercadoAlvo: ['Ecommerce'],
      tecnologia: ['Java 11'],
    },
    {
      nome: 'Gubee Integrador - teste 2',
      descricao: 'Ferramenta de integração para marketplaces - teste 2 ',
      mercadoAlvo: ['Ecommerce'],
      tecnologia: ['Kotlin'],
    },
    {
      nome: 'Gubee Integrador - teste 2',
      descricao: 'Ferramenta de integração para marketplaces - teste 2 ',
      mercadoAlvo: ['Ecommerce'],
      tecnologia: ['Kotlin'],
    },
    {
      nome: 'Gubee Integrador - teste 4',
      descricao: 'Ferramenta de integração para marketplaces - teste 4',
      mercadoAlvo: ['Ecommerce'],
      tecnologia: ['Kotlin'],
    },
    {
      nome: 'Gubee Integrador - teste 4',
      descricao: 'Ferramenta de integração para marketplaces - teste 4',
      mercadoAlvo: [
        'Ecommerce',
        'ERP',
        'Lojista que não desejam possuir ecommerce',
      ],
      tecnologia: ['Java 11', 'Kotlin', 'Kafka'],
    },
    {
      nome: 'Gubee Integrador - teste 4',
      descricao: 'Ferramenta de integração para marketplaces - teste 4',
      mercadoAlvo: [
        'Ecommerce',
        'ERP',
        'Lojista que não desejam possuir ecommerce',
        'ERP 2',
      ],
      tecnologia: ['Java 11', 'Kotlin', 'Kafka'],
    },
    {
      nome: 'Teste louco',
      descricao: 'Ferramenta de integração para marketplaces - teste',
      mercadoAlvo: ['Ecommerce', 'ERP'],
      tecnologia: ['Java 11', 'Kafka'],
    },
  ];
}
