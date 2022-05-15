import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from '../../models/generic-carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  productsCarousel$: Observable<GenericCarouselItemData[]>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productsCarousel$ = this.productsService.productsList$;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts();
  }

  private getProducts(): void {
    // this.productsService.

  }

  onClick(content: GenericCarouselItemData) {
    this.productsService.setSelectedService(content);
    this.router.navigate([`services/${content.name}/${content.id}`]);
  }

}
