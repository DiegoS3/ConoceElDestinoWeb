import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { ProductsService } from 'src/app/services/products.service';
import { endpoint } from 'src/environments/apis/apis';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit {

  experience$: Observable<any>;
  productList$: Observable<any>;

  private categoryName = '';

  productList = [];
  constructor(
    private productsService: ProductsService,
    private genericService: GenericService
  ) {
    this.experience$ = this.productsService.selectedExperience$;
    this.productList$ = this.productsService.productByCategoryList$;
  }

  ngOnInit(): void {

  }

}
