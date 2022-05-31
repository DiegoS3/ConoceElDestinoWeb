import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from 'src/app/core/services/loading.service';
import { mockLoadingService } from 'src/assets/mock/test/mock-services';

import { HttpSpinnerComponent } from './http-spinner.component';

describe('HttpSpinnerComponent', () => {
  let component: HttpSpinnerComponent;
  let fixture: ComponentFixture<HttpSpinnerComponent>;
  const loadingService: Partial<LoadingService> = mockLoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpSpinnerComponent],
      providers: [{ provide: LoadingService, useValue: loadingService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
