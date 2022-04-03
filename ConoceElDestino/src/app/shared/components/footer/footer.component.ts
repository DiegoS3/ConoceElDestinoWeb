import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  footer = [
    {
      title: 'footer.titles.services',
      sections:
        [
          {
            label: 'footer.guided_visits',
            navigate: ''
          },
          {
            label: 'footer.georoutes',
            navigate: ''
          },
          {
            label: 'footer.experiences',
            navigate: ''
          },
          {
            label: 'footer.travels',
            navigate: ''
          },
        ]
    },
    {
      title: 'footer.titles.about_us',
      sections:
        [
          {
            label: 'footer.about',
            navigate: ''
          },
          {
            label: 'footer.contact_us',
            navigate: ''
          },
          {
            label: 'footer.work_us',
            navigate: ''
          },
          {
            label: 'footer.privacy_policy',
            navigate: ''
          },
          {
            label: 'footer.terms_conditions',
            navigate: ''
          },
        ]

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
