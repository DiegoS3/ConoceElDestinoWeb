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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { CaptchaModule } from 'primeng/captcha';
import { MarkAsteriskDirective } from './directive/mark-asterisk.directive';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { CoreModule } from './core/core.module';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { BookProductComponent } from './components/book-product/book-product.component';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { TotalPeopleDirective } from './directive/total-people.directive';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CollaboratorsComponent,
    OpinionsComponent,
    ContactComponent,
    MainComponent,
    ServiceDetailComponent,
    MarkAsteriskDirective,
    TotalPeopleDirective,
    ExperiencesComponent,
    BookProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CarouselModule,
    CalendarModule,
    RatingModule,
    FormsModule,
    TooltipModule,
    DividerModule,
    HttpClientModule,
    InputTextModule,
    AppRoutingModule,
    EditorModule,
    CaptchaModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DropdownModule,
    CoreModule,
    InputMaskModule,
    InputNumberModule,
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
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
