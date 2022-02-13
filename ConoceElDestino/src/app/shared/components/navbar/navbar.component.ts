import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'main'
      },
      {
        label: 'Servicios',
        routerLink: '/services'
      },
      {
        label: 'Colaboradores',
        routerLink: '/collaborators'
      },
      {
        label: 'Opiniones',
        routerLink: '/opinions'
      },
      {
        label: 'Contacto',
        routerLink: '/contact'
      },
    ];
  }
}
