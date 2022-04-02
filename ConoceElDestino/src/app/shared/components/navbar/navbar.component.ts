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

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'main',
        routerLinkActiveOptions: {
          exact: true
        },
        styleClass: 'menucus'
      },
      {
        label: 'Servicios',
        routerLink: '/services',
        routerLinkActiveOptions: {
          exact: true
        },
        styleClass: 'menucus'
      },
      {
        label: 'Colaboradores',
        routerLink: '/collaborators',
        routerLinkActiveOptions: {
          exact: true
        },
      },
      // {
      //   label: 'Opiniones',
      //   routerLink: '/opinions',
      //   routerLinkActiveOptions: {
      //     exact: true
      //   },
      // },
      {
        label: 'Contacto',
        routerLink: '/contact',
        routerLinkActiveOptions: {
          exact: true
        },
      },
    ];
  }
}
