import { Component, OnInit } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  products: (IProduct | IMotor | IInmobiliaria | ITecnologia)[] = [];

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
    let ref = this._productsService.getProducts();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.products.push(value);
      })
    })
    //this.products =  this._productsService.getProducts();
  }
}
