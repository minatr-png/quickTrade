import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IVentas, IProduct } from '../interfaces';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  ventas: (IProduct)[] = [];

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
    let ref = this._productsService.getVentas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.ventas.push(value);
      })
      console.log(this.ventas);
    })
  }

}
