import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { NavbarComponent } from './components/navbar/navbar.component';

const COMPONENTS = [
  NavbarComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
    RouterModule,
    MenubarModule
  ],
  providers: [DatePipe],
  exports: [...COMPONENTS]
})
export class SharedModule {}
