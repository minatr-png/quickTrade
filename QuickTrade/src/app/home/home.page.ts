import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title : string = "QuickTrade";
  category : string = "";
  btnShape : string = "round";

  constructor() {}

  change_Categoy(value){
    this.category = value.target.value;
  }

}
