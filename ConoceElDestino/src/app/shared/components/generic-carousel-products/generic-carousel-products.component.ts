import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { GenericCarouselData, GenericCarouselItemData } from '../../models/generic-carousel.model';

@Component({
  selector: 'app-generic-carousel-products',
  templateUrl: './generic-carousel-products.component.html',
  styleUrls: ['./generic-carousel-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericCarouselProductsComponent implements OnInit {

  @Input() carouselData: any;

  responsiveOptions;

  constructor(
    private router: Router,
    private servicesService: ServicesService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1920px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1520px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
  }

  onClick(content: GenericCarouselItemData) {
    this.servicesService.setSelectedService(content);
    this.router.navigate([`services/${content.name}/${content.id}`]);
  }

}
