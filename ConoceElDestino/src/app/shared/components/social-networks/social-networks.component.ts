import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
