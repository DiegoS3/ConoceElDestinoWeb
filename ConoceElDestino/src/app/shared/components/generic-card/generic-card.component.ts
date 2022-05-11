import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() product: any;
  @Input() header: any;

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAccess(): void {
    this.servicesService.setSelectedExperience(this.product);
    this.servicesService.getProductByCategory(this.product.name);
    this.router.navigate([`${this.header}/details`]);
  }

}
