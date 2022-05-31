import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  collaborators = [
    { name: "Lonely", image: '29366.jpg' },
    { name: "Lonely", image: '29367.jpg' },
    { name: "Lonely", image: '29368.jpg' },
    { name: "Lonely", image: '29369.jpg' },
    { name: "Lonely", image: '29368.jpg' },
    { name: "Lonely", image: '29366.jpg' },
    { name: "Lonely", image: '29367.jpg' },
    { name: "Lonely", image: '29369.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
