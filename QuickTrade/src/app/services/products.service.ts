import { Injectable } from '@angular/core';
import { IProduct, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductsService {
    constructor(private _db: AngularFireDatabase) {

    }

    getProducts(): firebase.default.database.Reference{
        let ref = this._db.database.ref("products");
        return ref;
    }

    setProduct(product: IProduct) {
        let ref = this._db.database.ref("products");
        ref.push(product);
    }

    /********** Inicio ejercicio B **********/
    getVentas(): firebase.default.database.Reference{
        let ref = this._db.database.ref("Mis_ventas");
        return ref;
    }
    /********** Fin ejercicio B **********/
}