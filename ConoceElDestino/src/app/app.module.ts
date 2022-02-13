import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {CarouselModule} from 'primeng/carousel';
import { ServicesComponent } from './components/services/services.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CollaboratorsComponent,
    OpinionsComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
