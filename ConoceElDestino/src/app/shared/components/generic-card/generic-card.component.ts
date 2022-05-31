import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() product: any;
  @Input() header: any;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAccess(): void {
    this.productsService.setSelectedExperience(this.product);
    this.productsService.getProductByCategory(this.product.name);
    this.router.navigate([`${this.header}/details`]);
  }

}
