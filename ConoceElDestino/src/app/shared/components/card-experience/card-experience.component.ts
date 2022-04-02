import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
