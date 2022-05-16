import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();
  private label_translate = '';

  footer = [
    {
      title: 'footer.titles.services',
      navigate: '/details',
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
            navigate: 'about'
          },
          {
            label: 'footer.contact_us',
            navigate: 'contact'
          },
          {
            label: 'footer.work_us',
            navigate: 'collaborators'
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

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(label: string, navigate?: string, navigate2?: string): void {
    this.label_translate = this.translate.instant(label);
    sessionStorage.setItem('section', this.label_translate);
    const url = navigate ? this.label_translate + navigate : navigate2!;
    this.router.navigate([url]);
  }
}
