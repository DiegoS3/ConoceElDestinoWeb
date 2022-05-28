import { Component, OnInit, ChangeDetectionStrategy, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Observable, pluck } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { endpoint } from 'src/environments/apis/apis';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  experience$?: Observable<any>;
  productList$: Observable<any>;
  section = this.route.snapshot.params['section'];

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    sessionStorage.setItem("section", this.section);
  }

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productList$ = this.productsService.productByCategoryList$;
  }

  ngOnInit(): void {
    this.getExperience();
    this.checkUrl();
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  checkUrl(): void {
    const currentUrl = this.router.url;

    let previousUrl;
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          previousUrl = currentUrl;
          previousUrl = event.url;
          this.section = this.route.snapshot.params['section'];
          this.checkNewData(currentUrl, previousUrl);
        }
      });
  }

  private checkNewData(current: string, previous: string): void {
    previous != current ? this.getData(this.section) : '';
  }

  private getExperience(): void {
    const sectionCache = sessionStorage.getItem("section");

    if (sectionCache) {
      this.getData(sectionCache);
    }
    else {
      this.experience$ = this.productsService.selectedExperience$;
    }

  }

  private getData(section: string): void {
    this.categoryService.getCategoryByName(section);
    this.experience$ = this.categoryService.category$;
    this.productsService.getProductByCategory(section);
  }

}
