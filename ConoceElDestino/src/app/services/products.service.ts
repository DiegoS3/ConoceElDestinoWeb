import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { endpoint } from 'src/environments/apis/apis';
import { IToast, ToastSeverity } from '../shared/models/custom-primeng-model';
import { GenericCarouselItemData } from '../shared/models/generic-carousel.model';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private selectedServiceSubject = new BehaviorSubject<any>(undefined);
  private selectedExperienceSubject = new BehaviorSubject<any>(undefined);
  private selectedCategoryNameSubject = new BehaviorSubject<string>('');

  private productByCategoryListSubject = new BehaviorSubject<any[]>([]);
  private productsListSubject = new BehaviorSubject<any[]>([]);
  private productsCarouselListSubject = new BehaviorSubject<GenericCarouselItemData[]>([]);

  selectedService$: Observable<GenericCarouselItemData>;
  selectedExperience$: Observable<GenericCarouselItemData>;
  selectedCategoryName$: Observable<string>;
  productByCategoryList$: Observable<any[]>;
  productsList$: Observable<any[]>;
  productsCarouselList$: Observable<GenericCarouselItemData[]>;

  constructor(
    private genericService: GenericService,
    private translate: TranslateService,
    private messageService: MessageService
  ) {
    this.selectedService$ = this.selectedServiceSubject.asObservable();
    this.selectedExperience$ = this.selectedExperienceSubject.asObservable();
    this.selectedCategoryName$ = this.selectedCategoryNameSubject.asObservable();
    this.productByCategoryList$ = this.productByCategoryListSubject.asObservable();
    this.productsList$ = this.productsListSubject.asObservable();
    this.productsCarouselList$ = this.productsCarouselListSubject.asObservable();
  }

  setSelectedService(service: any) {
    this.selectedServiceSubject.next(service);
  }

  setSelectedExperience(experience: any) {
    this.selectedExperienceSubject.next(experience);
  }

  setSelectedCategoryName(name: string) {
    this.selectedCategoryNameSubject.next(name);
  }

  getProductByCategory(name: string): void {

    const params: Record<string, string> = {
      name: name
    }
    this.genericService.httpGet(endpoint.PRODUCT_BY_CATEGORY, params).subscribe(
      response => this.productByCategoryListSubject.next(response.body)
    );
  }

  getAllProducts(): void {
    this.genericService.httpPost(endpoint.ALL_PRODUCTS, {}).subscribe(
      {
        next: res => {
          this.productsListSubject.next(res);
          this.getRandomValues(res);
        },
        error: err => {
          this.productsListSubject.next([]);
          const toast: IToast = {
            severity: ToastSeverity.info,
            summary: err,
            detail: this.translate.instant('sections.contact.send_error'),
          };
          this.messageService.add(toast);
        }
      }
    )
  }

  getImagesByProduct(id: string): void {
    const params: Record<string, string> = {
      name: id
    }
    this.genericService.httpGet(endpoint.IMAGE_BY_PRODUCT, params).subscribe(
      {
        next: res => {
          console.log();

        },
        error: err => {
          this.productsListSubject.next([]);
          const toast: IToast = {
            severity: ToastSeverity.info,
            summary: err,
            detail: this.translate.instant('sections.contact.send_error'),
          };
          this.messageService.add(toast);
        }
      }
    )
  }

  private getRandomValues(list: GenericCarouselItemData[]): void {
    // Shuffle array
    const shuffled = list.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 4);
    this.productsCarouselListSubject.next(selected);
  }

}
