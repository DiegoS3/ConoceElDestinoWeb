import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from 'src/app/services/services.service';
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
    private servicesService: ServicesService,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.header = this.translate.instant('sections.experiences.conoce_experience') + ' Lugar: ' + this.experience.name;
  }

  onClick(content: GenericCarouselItemData) {
    this.servicesService.setSelectedService(content);
    this.router.navigate([`services/${content.name}/${content.id}`]);
  }

}
