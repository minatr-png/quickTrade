import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "QuickTrade";
  category: string = "";
  btnShape: string = "round";

  motorProducts: any[] = [
    {
      "name" : "Mazda R8",
      "description" : "Coche que hace cosas de coches como poder moverse.",
      "price" : 56000,
      "km" : 230000,
      "type" : "coche"
    },
    {
      "name" : "Yaiba Kusanagi",
      "description" : "Mucha moto me parece esto",
      "price" : 22000,
      "km" : 270000,
      "type" : "moto"
    }
  ]
  inmobProducts: any[] = [
    {
      "name" : "Mansión en centro de Madrid",
      "description" : "El nombre lo dice todo un enorme lugar en el que vivir para una persona, por un precio muy razonable.",
      "price" : 200000,
      "size" : 20,
      "bathrooms" : 1,
      "rooms" : 3,
      "locality" : "Madrid"
    }
  ]
  tecnoProducts: any[] = [
    {
      "name" : "Router de Orange",
      "description" : "Pues un router que te da Orange al contratar su internet, pero como me voy a cambiar de compañía lo vendo.",
      "price" : 20,
      "state" : "usado"
    },
    {
      "name" : "Papelera gamer",
      "description" : "Papelera con luces leds.",
      "price" : 60,
      "state" : "perfecto"
    },
    {
      "name" : "USB",
      "description" : "USB encontrado en paseo de gracia, tiene fotos y cosas del dueño, puedes pedirmelo como nuevo o sin esto.",
      "price" : 10,
      "state" : "usado"
    }
  ]
  
  constructor() { }

  change_Categoy(value) {
    this.category = value.target.value;
  }

}
