import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericCarouselItemData } from '../shared/models/generic-carousel.model';

@Injectable({providedIn: 'root'})
export class ServicesService {

  private selectedServiceSubject = new BehaviorSubject<any>(undefined);

  selectedService$: Observable<GenericCarouselItemData>;

  constructor() {
    this.selectedService$ = this.selectedServiceSubject.asObservable();
  }

  setSelectedService(service: any){
    this.selectedServiceSubject.next(service);
  }

}
