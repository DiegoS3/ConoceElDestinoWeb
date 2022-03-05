import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import {ButtonModule} from 'primeng/button';

const COMPONENTS = [
  NavbarComponent,
  CarouselComponent,
  GenericCardComponent,
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
  ],
  providers: [DatePipe],
  exports: [...COMPONENTS]
})
export class SharedModule {}
