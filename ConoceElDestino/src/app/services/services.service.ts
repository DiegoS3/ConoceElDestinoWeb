import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericCarouselItemData } from '../shared/models/generic-carousel.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {

  private selectedServiceSubject = new BehaviorSubject<any>(undefined);
  private selectedExperienceSubject = new BehaviorSubject<any>(undefined);

  selectedService$: Observable<GenericCarouselItemData>;
  selectedExperience$: Observable<GenericCarouselItemData>;

  constructor() {
    this.selectedService$ = this.selectedServiceSubject.asObservable();
    this.selectedExperience$ = this.selectedExperienceSubject.asObservable();
  }

  setSelectedService(service: any) {
    this.selectedServiceSubject.next(service);
  }

  setSelectedExperience(experience: any) {
    this.selectedExperienceSubject.next(experience);
  }

}
