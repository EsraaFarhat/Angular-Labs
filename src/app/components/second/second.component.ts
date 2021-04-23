import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  images = [
    'assets/Images/1.jpg',
    'assets/Images/2.jpg',
    'assets/Images/3.png',
    'assets/Images/4.jpg',
    'assets/Images/5.jpg',
    'assets/Images/6.jpg',
  ];
  i = 0;
  myImage = this.images[0];
  handler;
  play= false;
  stop= true;

  prevFun() {
    this.i--;
    if (this.i < 0) this.i = this.images.length - 1;
    this.myImage = this.images[this.i];
  }
  nextFun() {
    this.i++;
    if (this.i >= this.images.length) this.i = 0;
    this.myImage = this.images[this.i];
  }
  playFun() {
    this.handler = setInterval(() => this.nextFun(), 1500);
    this.play = true;
    this.stop = false;
  }
  stopFun() {
    clearInterval(this.handler);
    this.play = false;
    this.stop = true;
  }
}
