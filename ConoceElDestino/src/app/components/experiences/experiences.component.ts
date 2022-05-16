import { Component, OnInit, ChangeDetectionStrategy, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
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
    private route: ActivatedRoute
  ) {
    this.productList$ = this.productsService.productByCategoryList$;
  }

  ngOnInit(): void {
    this.getExperience();
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  private getExperience(): void {
    const sectionCache = sessionStorage.getItem("section");

    if (sectionCache) {
      this.categoryService.getCategoryByName(sectionCache!);
      this.experience$ = this.categoryService.category$;
      this.productsService.getProductByCategory(this.section);
    }
    else {
      this.experience$ = this.productsService.selectedExperience$;
    }

  }

}
