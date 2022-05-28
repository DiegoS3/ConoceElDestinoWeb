import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookProductComponent implements OnInit {

  service$: Observable<GenericCarouselItemData>;

  constructor(
    private productsService: ProductsService
  ) {
    this.service$ = this.productsService.selectedService$;
  }


  ngOnInit(): void {
  }

}
