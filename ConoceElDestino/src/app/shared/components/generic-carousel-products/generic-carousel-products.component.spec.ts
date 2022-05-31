import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCarouselProductsComponent } from './generic-carousel-products.component';

describe('GenericCarouselProductsComponent', () => {
  let component: GenericCarouselProductsComponent;
  let fixture: ComponentFixture<GenericCarouselProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericCarouselProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCarouselProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
