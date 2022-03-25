import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent implements OnInit {

  service$: Observable<GenericCarouselItemData>;
  readOnly = true;

  constructor(
    private servicesService: ServicesService
  ) {
    this.service$ = this.servicesService.selectedService$;
  }

  ngOnInit(): void {
  }

}
