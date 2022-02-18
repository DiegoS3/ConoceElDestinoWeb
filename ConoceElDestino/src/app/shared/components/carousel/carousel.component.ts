import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  products: any[] = [];
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.products.push({name: 'a', image: '29366.jpg'})
    this.products.push({name: 'b', image: '29367.jpg'})
    this.products.push({name: 'c', image: '29368.jpg'})
    this.products.push({name: 'd', image: '29369.jpg'})
  }

}
