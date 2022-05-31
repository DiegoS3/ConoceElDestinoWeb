import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselData, GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: GenericCarouselData[] = [];
  news: GenericCarouselItemData[] = [];
  moreChoosen: GenericCarouselItemData[] = [];

  producstList$: Observable<any>;

  constructor(private productsService: ProductsService) {
    this.producstList$ = this.productsService.productsList$;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts();
    this.getData();
  }

  private getData(): void {
    this.producstList$.subscribe(
      list => {
        this.getRandomValues(list);
      }
    );
  }

  private getRandomValues(list: GenericCarouselItemData[]): void {
    // Shuffle array
    const shuffled = list.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    this.news = shuffled.slice(list.length - 5, list.length);
    this.moreChoosen = list;
    this.printCarouselData();
  }

  private printCarouselData(): void {
    this.services = [
      {
        header: 'sections.services.headers_carousel.new',
        content: this.news,
      },
      {
        header: 'sections.services.headers_carousel.more_choosen',
        content: this.moreChoosen,
      }
    ];
  }

}
