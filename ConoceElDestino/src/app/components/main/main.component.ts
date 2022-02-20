import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];

  constructor() {   
    this.products.push({name: 'a', image: '29366.jpg'})
    this.products.push({name: 'b', image: '29367.jpg'})
    this.products.push({name: 'c', image: '29368.jpg'})
    this.products.push({name: 'c', image: '29368.jpg'})
    this.products.push({name: 'd', image: '29369.jpg'})
   }

  ngOnInit(): void {
    
  }

}
