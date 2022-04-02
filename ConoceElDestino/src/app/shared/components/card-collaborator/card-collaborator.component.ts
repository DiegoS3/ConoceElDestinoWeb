import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card-collaborator',
  templateUrl: './card-collaborator.component.html',
  styleUrls: ['./card-collaborator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCollaboratorComponent implements OnInit {

  @Input() collaborator: any;
  link: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.link = 'https://raw.githubusercontent.com/DiegoS3/ConoceElDestinoWeb/384bd13adac52dcf130108eea959d0e5aa7180b1/ConoceElDestino/src/assets/showcase/images/' + this.collaborator?.image;
  }

}
