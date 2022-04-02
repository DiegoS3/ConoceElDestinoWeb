import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit {

  experience$: Observable<any>;

  constructor(
    private servicesService: ServicesService
  ) {
    this.experience$ = this.servicesService.selectedExperience$;
  }

  ngOnInit(): void {
  }

}
