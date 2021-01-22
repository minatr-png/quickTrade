import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ToastController } from '@ionic/angular';
import { IProduct, IVenta } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  ventas: (IProduct)[] = [];
  punctuation: number = 0;

  constructor(private _activatedRoute: ActivatedRoute, private _toastCtrl: ToastController, private _productsService: ProductsService) { }

  ngOnInit() {
    let ref = this._productsService.getVentas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.ventas.push(value);
      })
    })
  }

  addEnvio() {
    let product;
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    let ref = this._productsService.getProducts();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        console.log(id);
        if (id == value.id) {
          console.log(value);
          let venta: IVenta = {
            "name": value.name,
            "punctuation": this.punctuation
          };

          this._productsService.setVentas(venta);
          this.ventasToast();
        }
      })
    })
  }

  async ventasToast() {
    const toast = await this._toastCtrl.create(
      {
        message: 'El producto se ha guardado como enviado',
        duration: 1000,
        position: 'bottom'
      });
    toast.present();
  }
}
