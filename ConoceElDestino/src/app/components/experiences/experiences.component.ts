import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { ServicesService } from 'src/app/services/services.service';
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
    private servicesService: ServicesService,
    private genericService: GenericService
  ) {
    this.experience$ = this.servicesService.selectedExperience$;
    this.productList$ = this.servicesService.productList$;
  }

  ngOnInit(): void {

  }

}
