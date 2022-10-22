import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoaderInterceptor } from './interceptors/http-loader.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
