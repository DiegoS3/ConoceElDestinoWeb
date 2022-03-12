import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-generic-carousel-products',
  templateUrl: './generic-carousel-products.component.html',
  styleUrls: ['./generic-carousel-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericCarouselProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
