import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';
import { HttpProgressState } from 'src/app/shared/models/http-spinner.model';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this.loadingService.setHttpInterceptedSubject({
      url: request.url,
      state: HttpProgressState.start,
    });

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.setHttpInterceptedSubject({
          url: request.url,
          state: HttpProgressState.end,
        });
      })
    );

  }
}
