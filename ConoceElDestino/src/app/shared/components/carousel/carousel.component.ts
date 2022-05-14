import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { GenericCarouselItemData } from '../../models/generic-carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // products: GenericCarouselItemData[] = [
  //   { id: '1', name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: 20, rating: 4 },
  //   { id: '2', name: 'Expncias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 3.7 },
  //   { id: '3', name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 5 },
  //   { id: '4', name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20, rating: 2.8 },
  // ];
  responsiveOptions;

  constructor(
    private servicesService: ServicesService,
    private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
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
