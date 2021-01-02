import { Component } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
  products: (IProduct | IMotor | IInmobiliaria | ITecnologia)[] = [
    {
      "id": 1,
      "name": "Mazda R8",
      "description": "Coche que hace cosas de coches como poder moverse.",
      "price": 56000,
      "km": 230000,
      "type": "coche"
    },
    {
      "id": 2,
      "name": "Yaiba Kusanagi",
      "description": "Mucha moto me parece esto",
      "price": 22000,
      "km": 270000,
      "type": "moto"
    },
    {
      "id": 3,
      "name": "Mansión en centro de Madrid",
      "description": "El nombre lo dice todo un enorme lugar en el que vivir para una persona, por un precio muy razonable.",
      "price": 200000,
      "size": 20,
      "bathrooms": 1,
      "rooms": 3,
      "locality": "Madrid"
    },
    {
      "id": 4,
      "name": "Router de Orange",
      "description": "Pues un router que te da Orange al contratar su internet, pero como me voy a cambiar de compañía lo vendo.",
      "price": 20,
      "state": "usado"
    },
    {
      "id": 5,
      "name": "Papelera gamer",
      "description": "Papelera con luces leds.",
      "price": 60,
      "state": "perfecto"
    },
    {
      "id": 6,
      "name": "USB",
      "description": "USB encontrado en paseo de gracia, tiene fotos y cosas del dueño, puedes pedirmelo como nuevo o sin esto.",
      "price": 10,
      "state": "usado"
    }
  ]

  constructor(private _toastCtrl: ToastController) { }

  ngOnInit() {
    console.log("Estás en la página principal.");
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

    this.products.push(product);
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
