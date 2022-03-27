import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];

  constructor() {
    this.products.push({
      name: 'Visitas Guiadas', image: '29366.jpg', shortDescription: 'Visitas culturales, de naturaleza, tematizadas, industriales, etnográficas, etc, con una interpretación dinámica y divertida.',
      description: 'Ven a descubrir alguno de los atractivos de la provincia en una de ' +
        'nuestras visitas guiadas. Visitas culturales, de naturaleza, tematizadas, industriales, etnográficas, etc, con una interpretación dinámica y divertida'
    })
    this.products.push({
      name: 'Georutas', image: '29367.jpg', shortDescription: 'Rutas de senderismo centradas en los valores geológicos de nuestro territorio.',
      description: 'Rutas de senderismo centradas en los valores geológicos de nuestro territorio.' +
        ' La mineralización de Mercurio de Almadén, la Pompeya Carbonífera de Puertollano o el Campo Volcánico de Calatrava como hechos que nos conducen por el camino' +
        ' de la historia geológica de C.Real.'
    })
    this.products.push({
      name: 'Experiencias', image: '29368.jpg', shortDescription: 'Ciudad Real tiene muchos lugares por descubrir… ¡atreveteydejáte encandilar por su mágia tan  desconocida como sorprendente!',
      description: 'Ciudad Real tiene muchos lugares por descubrir… ¡atreveteydejáte encandilar por su mágia tan  desconocida como sorprendente! Experiencias gastronómicas, paquetes de fin de semana, turismo de salud...'
    })
    this.products.push({
      name: 'Viajes', image: '29369.jpg', shortDescription: 'Viajes y escapadas en grupo',
      description: 'Viajes y escapadas en grupo. Si eres de la provincia y quieres conocer sitios nuevos de la Península Ibérica, pero no tienes tiempo para organizarlo, ¡no te preocupes! Realizamos circuitos para aventureros con diferentes inquietudes y con todo organizado. ;)'
    })
  }

  ngOnInit(): void {

  }

}
