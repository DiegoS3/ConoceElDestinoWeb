import { Component, OnInit, ChangeDetectionStrategy, HostListener, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

  service$: Observable<GenericCarouselItemData>;
  readOnly = true;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.service$.subscribe(
      product =>
        sessionStorage.setItem("product", JSON.stringify(product))
    )
  }

  constructor(
    private productsService: ProductsService
  ) {
    this.service$ = this.productsService.selectedService$;
  }

  ngOnInit(): void {
    this.manageSession();
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  manageSession(): void {
    const productCache = JSON.parse(sessionStorage.getItem("product")!);
    if (productCache)
      this.productsService.setSelectedService(productCache)
  }

}
