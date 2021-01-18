import { Injectable } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductsService {
    /*products: (IProduct | IMotor | IInmobiliaria | ITecnologia)[] = [
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

    getProducts(): IProduct[]{
        return this.products;
    }

    getProduct(id : number) : IProduct{
        return this.products.find(x => x.id == id);
    }*/

    constructor(private _db: AngularFireDatabase) {

    }

    setProduct(product: IProduct) {
        let ref = this._db.database.ref("products");
        ref.push(product);
    }
}