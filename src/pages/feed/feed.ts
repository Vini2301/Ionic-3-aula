import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Vinicius Arlei do Codigo";

  constructor(public navCtrl: NavController) {
  }

  public somaDoisnumeros(num1:number, num2:number):void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.somaDoisnumeros(10, 99);
  }

}
