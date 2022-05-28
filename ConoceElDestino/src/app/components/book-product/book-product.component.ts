import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookProductComponent implements OnInit {

  bookingForm: FormGroup;
  service$: Observable<GenericCarouselItemData>;

  fullname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', Validators.required);
  adults = new FormControl('', Validators.required);
  childs = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  hour = new FormControl('', Validators.required);
  knowabout = new FormControl('');
  honeypot = new FormControl('');

  submitted: boolean = false;
  isLoading: boolean = false;
  error: boolean = false;
  responseMessage!: string;

  minDate?: Date;
  maxDate?: Date;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.service$ = this.productsService.selectedService$;
    this.bookingForm = this.formBuilder.group({
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      adults: this.adults,
      childs: this.childs,
      date: this.date,
      hour: this.hour,
      knowabout: this.knowabout,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date();
    let nextMonth = (month === 11) ? 0 : month + 3;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }

  onSubmit(): void { }

}
