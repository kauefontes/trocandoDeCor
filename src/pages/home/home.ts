import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myColor = "#32db64"
  colors =["#488aff","#32db64","#f53d3d","#f4f4f4","#222","#ffcc55"]
  color = 0;

  constructor(public navCtrl: NavController, private changeDetectorRef: ChangeDetectorRef) {}

  changeColor(){
    this.myColor = "background-color:" + this.colors[this.color]+";";
    this.changeDetectorRef.detectChanges();
    console.log(this.myColor);
    this.color++;
    if (this.color > 5){
      this.color = 0;
    }
  }

}
