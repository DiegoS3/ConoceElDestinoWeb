import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { endpoint } from 'src/environments/apis/apis';
import { GenericCarouselItemData } from '../shared/models/generic-carousel.model';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class ServicesService {

  private selectedServiceSubject = new BehaviorSubject<any>(undefined);
  private selectedExperienceSubject = new BehaviorSubject<any>(undefined);
  private selectedCategoryNameSubject = new BehaviorSubject<string>('');

  private productListSubject = new BehaviorSubject<any[]>([]);

  selectedService$: Observable<GenericCarouselItemData>;
  selectedExperience$: Observable<GenericCarouselItemData>;
  selectedCategoryName$: Observable<string>;
  productList$: Observable<any[]>;

  constructor(private genericService: GenericService) {
    this.selectedService$ = this.selectedServiceSubject.asObservable();
    this.selectedExperience$ = this.selectedExperienceSubject.asObservable();
    this.selectedCategoryName$ = this.selectedCategoryNameSubject.asObservable();
    this.productList$ = this.productListSubject.asObservable();
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
      response => this.productListSubject.next(response.body)
    );
  }

}
