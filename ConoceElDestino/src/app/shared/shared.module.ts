import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const COMPONENTS = [
  NavbarComponent,
  CarouselComponent
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
    CarouselModule
  ],
  providers: [DatePipe],
  exports: [...COMPONENTS]
})
export class SharedModule {}
