import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConoceElDestino';
  private activeLang = 'es';

  currentYear = new Date().getFullYear();

  constructor(
    private translate: TranslateService,
    private vps: ViewportScroller,) {

    this.translate.setDefaultLang(this.activeLang);
  }

  onActivate() {
    this.vps.scrollToPosition([0, 0]);
    this.vps.getScrollPosition();
  }

  close(): void {
    window.close()
  }

}
