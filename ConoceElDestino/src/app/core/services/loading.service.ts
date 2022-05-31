import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  HttpProgressState,
  IHttpState,
} from '../../shared/models/http-spinner.model';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private httpInterceptedSubject = new BehaviorSubject<IHttpState>(
    {} as IHttpState
  );
  private hasPendingRequestsSubject = new BehaviorSubject<boolean>(false);
  private pendingRequests = 0;

  hasPendingRequests$ = this.hasPendingRequestsSubject.asObservable();

  constructor() {}

  private isFirstRequest(httpState: IHttpState): boolean {
    return (
      httpState.state === HttpProgressState.start && this.pendingRequests === 1
    );
  }

  private isLastRequest(httpState: IHttpState): boolean {
    return (
      httpState.state === HttpProgressState.end && this.pendingRequests === 0
    );
  }

  setHttpInterceptedSubject(httpState: IHttpState): void {
    httpState.state === HttpProgressState.start
      ? this.pendingRequests++
      : this.pendingRequests--;
    this.httpInterceptedSubject.next(httpState);
    if (this.isFirstRequest(httpState) || this.isLastRequest(httpState)) {
      this.hasPendingRequestsSubject.next(!!this.pendingRequests);
    }
  }
}
