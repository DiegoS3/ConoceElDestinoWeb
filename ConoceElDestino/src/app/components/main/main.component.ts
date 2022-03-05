import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];

  constructor() {   
    this.products.push({name: 'Visitas Guiadas', image: '29366.jpg'})
    this.products.push({name: 'Georutas', image: '29367.jpg'})
    this.products.push({name: 'Experiencias', image: '29368.jpg'})
    this.products.push({name: 'Viajes', image: '29369.jpg'})
   }

  ngOnInit(): void {
    
  }

}
