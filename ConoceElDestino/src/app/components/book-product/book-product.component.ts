import { Component, OnInit, ChangeDetectionStrategy, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { ProductsService } from 'src/app/services/products.service';
import { GenericCarouselItemData } from 'src/app/shared/models/generic-carousel.model';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookProductComponent implements OnInit, OnDestroy {

  bookingForm: FormGroup;
  service$: Observable<GenericCarouselItemData>;

  fullname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', Validators.required);
  adults = new FormControl(0,);
  childs = new FormControl(0,);
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

  productName = '';
  product?: GenericCarouselItemData;
  initHour = 0;
  endHour = 0;


  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.saveDataInSession();
  }

  constructor(
    private contactService: ContactService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private translate: TranslateService
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
    this.limitDates();
    this.manageSession();
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  private manageSession(): void {
    const productNameCache = JSON.parse(sessionStorage.getItem("productName")!);
    const productCache = JSON.parse(sessionStorage.getItem("product")!);
    const initHourCache = JSON.parse(sessionStorage.getItem("initHour")!);
    const endHourCache = JSON.parse(sessionStorage.getItem("endHour")!);

    if (productCache) {
      this.productsService.setSelectedService(productCache);
      this.product = productCache;
      this.productName = productNameCache;
      this.initHour = +initHourCache.slice(0, 2);
      this.endHour = +endHourCache.slice(0, 2);
    }
    else {
      this.service$.subscribe(
        product => {
          this.product = product;
          if (this.getSeason() === "Winter") {
            this.initHour = +product.horario.inviernoHoraEnd.slice(0, 2);
            this.endHour = +product.horario.inviernoHoraInit.slice(0, 2);
          } else {
            this.initHour = +product.horario.veranoHoraEnd.slice(0, 2);
            this.endHour = +product.horario.veranoHoraInit.slice(0, 2);
          }
        }
      )
    }

  }

  private limitDates(): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date();
    const nextMonth = (month === 11) ? 0 : month + 3;
    const nextYear = (nextMonth === 0) ? year + 1 : year;
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }
  onSubmit(): void {
    if ("VALID" == this.bookingForm.status && "" == this.honeypot.value) {
      this.bookingForm.disable(); //disable the form if it's valid to disable multiple submissions
      const date: Date = this.bookingForm.controls['date'].value;
      var formData: any = new FormData();
      formData.append('nombre', this.bookingForm.controls['fullname'].value);
      formData.append('email', this.bookingForm.controls['email'].value);
      formData.append('teléfono', this.bookingForm.controls['phone'].value);
      formData.append('adultos', this.bookingForm.controls['adults'].value);
      formData.append('niños', this.bookingForm.controls['childs'].value);
      formData.append('hora', this.bookingForm.controls['hour'].value);
      formData.append('fecha', date.toLocaleDateString());
      formData.append('otros', this.bookingForm.controls['knowabout'].value);
      formData.append('servicio', this.productName);

      this.isLoading = true; //sending the post request async so it's in progress
      this.submitted = false; //hide the response message on multiple submits

      this.contactService.postMessage(formData).subscribe(
        (response) => {
          //choose the response message this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          //this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          if ("success" == response['result']) this.responseMessage = this.translate.instant('sections.booking.send_success');
          else this.responseMessage = this.translate.instant('sections.contact.send_error');

          this.bookingForm.enable(); //re enable the form after a success
          this.bookingForm.reset();
          this.submitted = true; //show the response message
          this.isLoading = false; // re enable the submit button
          this.error = false;

        },
        (error) => {
          this.responseMessage = this.translate.instant('sections.contact.send_error');
          this.bookingForm.enable(); //re enable the form after a success
          this.submitted = true; //show the response message
          this.isLoading = false; // re enable the submit button
          this.error = true;
        }
      )
    }
    else {
      this.responseMessage = this.translate.instant('sections.contact.form_not_valid');
      this.submitted = true;
      this.error = true;
    }
  }

  fillHoursDropdown(product: GenericCarouselItemData): string[] {
    let times = [];
    let quarterHours = ["00", "30"];
    const hours = this.getHours(product);


    for (let i = +hours[0].slice(0, 2); i < +hours[1].slice(0, 2) + 1; i++) {
      for (let j = 0; j < quarterHours.length; j++) {
        times.push(i + ":" + quarterHours[j]);
      }
    }

    const indexInit = times.indexOf(hours[0]);
    const indexEnd = times.indexOf(hours[1]);
    if (indexInit != 0 && indexEnd != times.length)
      times = times.slice(indexInit, indexEnd + 1);

    return times;
  }

  private saveDataInSession(): void {
    this.service$.subscribe(
      product => {
        sessionStorage.setItem("product", JSON.stringify(product));
        sessionStorage.setItem("productName", JSON.stringify(product.name));
        if (this.getSeason() === "Winter") {
          sessionStorage.setItem("endHour", JSON.stringify(product.horario.inviernoHoraEnd));
          sessionStorage.setItem("initHour", JSON.stringify(product.horario.inviernoHoraInit));
        } else {
          sessionStorage.setItem("endHour", JSON.stringify(product.horario.veranoHoraEnd));
          sessionStorage.setItem("initHour", JSON.stringify(product.horario.veranoHoraInit));
        }
      }
    )
  }

  private getHours(product: GenericCarouselItemData): string[] {
    const hours = [];
    if (this.getSeason() === "Winter") {
      hours.push(product.horario.inviernoHoraInit);
      hours.push(product.horario.inviernoHoraEnd);
    } else {
      hours.push(product.horario.veranoHoraInit);
      hours.push(product.horario.veranoHoraEnd);
    }
    return hours;
  }

  private getActualMonth(): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const month = today.getMonth();
    return monthNames[month];
  }

  private getSeason(): string {
    const monthCheck = this.getActualMonth();
    const monthWinter = ["January", "February", "March", "October", "November", "December"];
    return monthWinter.includes(monthCheck) ? "Winter" : "Summer";
  }

  getPrice(): number {
    const childs = this.bookingForm.controls['childs'].value;
    const adults = this.bookingForm.controls['adults'].value;
    const total = childs + adults

    return total > 7 ? this.product!.priceGroup : total * this.product!.priceIndi;
  }

}
