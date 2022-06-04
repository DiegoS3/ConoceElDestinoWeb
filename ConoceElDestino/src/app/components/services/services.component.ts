import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselData, GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';
import { NameCategory } from 'src/app/enums/categories.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: GenericCarouselData[] = [];
  news: GenericCarouselItemData[] = [];
  moreChoosen: GenericCarouselItemData[] = [];
  visiteList: GenericCarouselItemData[] = [];
  georuteList: GenericCarouselItemData[] = [];
  travelList: GenericCarouselItemData[] = [];
  experienceList: GenericCarouselItemData[] = [];

  producstList$: Observable<any>;
  categoryList$: Observable<any>;

  categoriesNameList: string[] = [];


  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {
    this.producstList$ = this.productsService.productsList$;
    this.categoryList$ = this.categoryService.categoryList$;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts();
    this.init();
  }

  private init(): void {
    this.getData();
    this.getNamesCategories();
  }

  private getData(): void {
    this.producstList$.subscribe(
      list => {
        this.getRandomValues(list);
        this.fillByCategory(list);
      }
    );
  }

  private getNamesCategories(): void {
    this.categoryList$.pipe(
      tap(cats => this.getName(cats)
      )
    ).subscribe()
  }

  private getName(categories: any): void {
    categories.forEach((cat: any) => {
      this.categoriesNameList.push(cat);
    });
  }

  private getRandomValues(list: GenericCarouselItemData[]): void {
    // Shuffle array
    const shuffled = list.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    this.news = shuffled.slice(list.length - 5, list.length);
    this.moreChoosen = list;

    // this.printCarouselData();
  }

  private fillByCategory(products: any): void {
    products.forEach((product: GenericCarouselItemData) => {
      switch (product.category) {
        case NameCategory.Visitas: {
          this.visiteList.push(product);
          break;
        }
        case NameCategory.Georutas: {
          this.georuteList.push(product);
          break;
        }
        case NameCategory.Experiencias: {
          this.experienceList.push(product);
          break;
        }
        case NameCategory.Viajes: {
          this.travelList.push(product);
          break;
        }
      }
    });
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
      },
      {
        header: 'footer.guided_visits',
        content: [...new Map(this.visiteList.map(item =>
          [item['id'], item])).values()]
      },
      {
        header: 'footer.georoutes',
        content: [...new Map(this.georuteList.map(item =>
          [item['id'], item])).values()]
      },
      {
        header: 'footer.experiences',
        content: [...new Map(this.experienceList.map(item =>
          [item['id'], item])).values()]
      },
      {
        header: 'footer.travels',
        content: [...new Map(this.travelList.map(item =>
          [item['id'], item])).values()]
      }
    ];
  }

}
