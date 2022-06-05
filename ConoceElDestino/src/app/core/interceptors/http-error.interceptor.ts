import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
  catchError,
  filter,
  finalize,
  pluck,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { ConfirmationService, MessageService } from 'primeng/api';
import { endpoint } from 'src/environments/apis/apis';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<any>(null);

  constructor(
    private confirmationService: ConfirmationService,
    private translate: TranslateService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 0 || error.status === 500) {
          this.confirmationService.confirm({
            header: this.translate.instant('generic.error_dialog'),
            message: this.translate.instant('generic.login_error'),
            key: 'errorDialog',
            accept: () => window.close(),
          });
        }

        return throwError(error);
      })
    );
  }
}
