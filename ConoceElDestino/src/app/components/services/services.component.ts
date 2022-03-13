import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products: any[] = [];

  constructor() {
    this.products.push({ name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 })
    this.products.push({ name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 })
    this.products.push({ name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 })
    this.products.push({ name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 })
    this.products.push({ name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 })
  }

  ngOnInit(): void {
  }

}
