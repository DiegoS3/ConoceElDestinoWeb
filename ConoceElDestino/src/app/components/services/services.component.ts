import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products: any[] = [];
  responsiveOptions;

  constructor() {
    this.products.push({name: 'Visitas Guiadas', image: '29366.jpg'})
    this.products.push({name: 'Georutas', image: '29367.jpg'})
    this.products.push({name: 'Experiencias', image: '29368.jpg'})
    this.products.push({name: 'Viajes', image: '29369.jpg'})
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '768px',
          numVisible: 2,
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
  }

}
