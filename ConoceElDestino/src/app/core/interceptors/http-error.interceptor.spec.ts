import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [MessageService, ConfirmationService],
    }).compileComponents();
  });

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpErrorInterceptor = TestBed.inject(
      HttpErrorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
