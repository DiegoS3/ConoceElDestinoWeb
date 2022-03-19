import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
