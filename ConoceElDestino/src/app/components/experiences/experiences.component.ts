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

  experinces = [
    { id: '1', name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: 20, rating: 4 },
    { id: '2', name: 'Expncias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 3.7 },
    { id: '3', name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 5 },
    { id: '4', name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 2.8 },
    { id: '5', name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 5 },
  ]

  constructor(
    private servicesService: ServicesService
  ) {
    this.experience$ = this.servicesService.selectedExperience$;
  }

  ngOnInit(): void {
  }

}
