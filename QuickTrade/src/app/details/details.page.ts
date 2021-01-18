import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id : number;
  product : IProduct;

  constructor(private _activatedRoute: ActivatedRoute, private _productsService : ProductsService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    let ref = this._productsService.getProducts();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {   
        console.log(snapshot.val())     ;
        let value = child.val();
        if (this.id === value.id) this.product = value;
      })
    })
    //this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.product = this._productsService.getProduct(this.id);
  }
}
