import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   const produtos = this.produtosService.getAll();
   this.route.queryParamMap.subscribe(params => {
   const descricao = params.get("descricao")?.toLowerCase();

   if(descricao){
    this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
    return;
  }

  this.produtos = produtos;

   });

  }
}


