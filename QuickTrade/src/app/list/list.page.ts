import { Component, OnInit } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  products: (IProduct | IMotor | IInmobiliaria | ITecnologia)[];

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
    this.products =  this._productsService.getProducts();
  }
}
