import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { GenericCarouselProductsComponent } from './components/generic-carousel-products/generic-carousel-products.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { CardCollaboratorComponent } from './components/card-collaborator/card-collaborator.component';
import { HttpSpinnerComponent } from './components/http-spinner/http-spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

const COMPONENTS = [
  NavbarComponent,
  CarouselComponent,
  GenericCardComponent,
  FooterComponent,
  SocialNetworksComponent,
  GenericCarouselProductsComponent,
  CardExperienceComponent,
  CardCollaboratorComponent,
  HttpSpinnerComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
    RouterModule,
    MenubarModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    DividerModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [DatePipe],
  exports: [...COMPONENTS]
})
export class SharedModule { }
