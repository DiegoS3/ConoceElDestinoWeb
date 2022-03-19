import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GenericCarouselData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products: GenericCarouselData[] = [];

  constructor(private translate: TranslateService) {
    this.products.push(
      {
        header: 'sections.services.headers_carousel.new',
        content: [
          { name: 'Visitas Guiadas', image: '29366.jpg', description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: 20 },
          { name: 'Expncias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { name: 'Georutas', image: '29367.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { name: 'Experiencias', image: '29368.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
          { name: 'Viajes', image: '29369.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
        ]

      });
  }

  ngOnInit(): void {
  }

}
