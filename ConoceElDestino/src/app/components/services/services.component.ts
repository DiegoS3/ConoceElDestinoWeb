import { Component, OnInit } from '@angular/core';
import { GenericCarouselData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: GenericCarouselData[] = [];

  constructor() {
    this.services = [
      {
        header: 'sections.services.headers_carousel.new',
        content: [
          { id: '1', name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: 20 },
          { id: '2', name: 'Expncias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '3', name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '4', name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '5', name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
        ]
      },
      {
        header: 'sections.services.headers_carousel.more_choosen',
        content: [
          { id: '12', name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: 20 },
          { id: '21', name: 'Expncias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '13', name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '14', name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { id: '11', name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

}
