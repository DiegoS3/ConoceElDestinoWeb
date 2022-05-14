import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  concat,
  Observable,
  of,
  race,
  Subject,
  timer,
} from 'rxjs';
import {
  delay,
  filter,
  first,
  mapTo,
  mergeMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-http-spinner',
  templateUrl: './http-spinner.component.html',
  styleUrls: ['./http-spinner.component.scss'],
})
export class HttpSpinnerComponent implements OnInit, OnDestroy {
  private displayLoadingSubject = new BehaviorSubject<boolean>(false);
  private destroySubject = new Subject<void>();
  private showLoadingAfter = 150;
  private showLoadingForAtLeast = 500;
  private newRequest$: Observable<any>;
  private completedRequests$: Observable<any>;

  displayLoading$ = this.displayLoadingSubject.asObservable();

  constructor(private loadingService: LoadingService) {
    this.newRequest$ = this.loadingService.hasPendingRequests$.pipe(
      filter((hasPendingRequests) => hasPendingRequests),
      mapTo(null)
    );
    this.completedRequests$ = this.loadingService.hasPendingRequests$.pipe(
      filter((hasPendingRequests) => !hasPendingRequests),
      mapTo(null)
    );
  }

  ngOnInit(): void {
    this.listenForHttpRequest();
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  listenForHttpRequest(): void {
    this.newRequest$
      .pipe(
        mergeMap(() => {
          const showLoading$ = of(true).pipe(
            delay(this.showLoadingAfter),
            tap(() => this.displayLoadingSubject.next(true))
          );
          const timeToHideTheLoading$ = timer(this.showLoadingForAtLeast);
          const shouldShowLoading$ = concat(
            showLoading$,
            timeToHideTheLoading$,
            this.completedRequests$.pipe(
              tap(() => this.displayLoadingSubject.next(false))
            )
          );
          return race(this.completedRequests$, shouldShowLoading$);
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe();
  }
}
