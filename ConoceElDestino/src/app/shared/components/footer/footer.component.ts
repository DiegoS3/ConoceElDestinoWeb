import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  services = [
    {
      label: 'Visitas Guiadas',
      navigate: ''
    },
    {
      label: 'Georutas',
      navigate: ''
    },
    {
      label: 'Experiencias',
      navigate: ''
    },
    {
      label: 'Viajes',
      navigate: ''
    },
  ];

  aboutUs = [
    {
      label: 'Sobre Conoce El Destino',
      navigate: ''
    },
    {
      label: 'Contactanos',
      navigate: ''
    },
    {
      label: 'Politica Privacidad',
      navigate: ''
    },
    {
      label: 'Terminos y Condiciones',
      navigate: ''
    },
    {
      label: 'Trabaja Con Nosotros',
      navigate: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
