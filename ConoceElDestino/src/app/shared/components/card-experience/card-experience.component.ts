import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from '../../models/generic-carousel.model';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardExperienceComponent implements OnInit {

  @Input() experience: any;

  header: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.header = this.translate.instant('sections.experiences.conoce_experience') + ' Lugar: ' + this.experience.name;
  }

  onClick(content: GenericCarouselItemData) {
    this.productsService.setSelectedService(content);
    this.router.navigate([`services/${content.name}/${content.id}`]);
  }

}
