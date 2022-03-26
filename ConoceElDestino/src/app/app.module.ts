import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { ServicesComponent } from './components/services/services.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ServiceDetailComponent } from './components/services/service-detail/service-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { CaptchaModule } from 'primeng/captcha';

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CollaboratorsComponent,
    OpinionsComponent,
    ContactComponent,
    MainComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    DividerModule,
    HttpClientModule,
    InputTextModule,
    AppRoutingModule,
    EditorModule,
    CaptchaModule,
    ReactiveFormsModule,
    DropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (handler: HttpBackend) => {
          const http = new HttpClient(handler);
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpBackend],
      },
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
