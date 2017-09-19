import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myColor = "secondary"
  colors =["primary","secondary","danger","light","dark","my-special-color"]
  color = 0;

  constructor(public navCtrl: NavController, private changeDetectorRef: ChangeDetectorRef) {}

  changeColor(){
    this.myColor = this.colors[this.color];
    this.changeDetectorRef.detectChanges();
    console.log(this.colors[this.color]);
    this.color++;
    if (this.color > 5){
      this.color = 0;
    }
  }

}
