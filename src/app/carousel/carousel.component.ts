import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['palh.jpg', 'uaru3.jpg'].map((imageName) => `assets/images/${imageName}`);


  constructor() {}

  ngOnInit(): void {}

   }
