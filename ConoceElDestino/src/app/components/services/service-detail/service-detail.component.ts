import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
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
    private productsService: ProductsService
  ) {
    this.service$ = this.productsService.selectedService$;
  }

  ngOnInit(): void {
  }

  minuteToHour(time: number): string {
    return (time / 60).toString();
  }

}
