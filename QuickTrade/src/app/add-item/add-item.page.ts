import { Component, OnInit } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  //Variables para el estado base
  title: string = "QuickTrade";
  btnShape: string = "round";

  //Características de productos
  name: string;
  description: string;
  price: number;
  category: string;
    //Motor
    km: number;
    type: string;
    //Bathrooms
    size: number;
    bathrooms: number;
    rooms: number;
    locality: string;
    //Tecnología
    state: string;

  //Productos
  products: (IProduct | IMotor | IInmobiliaria | ITecnologia)[] = [];

  constructor(private _toastCtrl: ToastController, private _productService : ProductsService) { }

  ngOnInit() {
    console.log("Estás en la página de añadir elementos.");
  }

  change_Categoy(value) {
    this.category = value.target.value;
  }

  add_Product() {
    let product: IProduct = {
      "id": this.products.length + 1,
      "name": this.name,
      "description": this.description,
      "price": this.price
    };

    //this.products.push(product);
    this._productService.setProduct(product);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this._toastCtrl.create(
      {
        message: 'El producto ha sido añadido',
        duration: 1000,
        position: 'bottom'
      });
      toast.present();
  }
}
