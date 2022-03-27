import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  fullname = new FormControl('', Validators.required);
  case = new FormControl('', Validators.required);
  reason = new FormControl('',);
  email = new FormControl('', [Validators.required, Validators.email]);
  description = new FormControl('', Validators.required);
  honeypot = new FormControl('');


  submitted: boolean = false;
  isLoading: boolean = false;
  error: boolean = false;
  responseMessage!: string;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private translate: TranslateService) {
    this.contactForm = this.formBuilder.group({
      fullname: this.fullname,
      case: this.case,
      reason: this.reason,
      email: this.email,
      description: this.description,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactForm.status);

    if ("VALID" == this.contactForm.status && "" == this.honeypot.value) {
      this.contactForm.disable(); //disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('name', this.contactForm.controls['fullname'].value);
      formData.append('case', this.contactForm.controls['case'].value);
      formData.append('email', this.contactForm.controls['email'].value);
      formData.append('reason', this.contactForm.controls['reason'].value);
      formData.append('message', this.contactForm.controls['description'].value);

      this.isLoading = true; //sending the post request async so it's in progress
      this.submitted = false; //hide the response message on multiple submits

      this.contactService.postMessage(formData).subscribe(
        (response) => {
          //choose the response message this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          //this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          if ("success" == response['result']) this.responseMessage = this.translate.instant('sections.contact.send_success');
          else this.responseMessage = this.translate.instant('sections.contact.send_error');

          this.contactForm.enable(); //re enable the form after a success
          this.contactForm.reset();
          this.submitted = true; //show the response message
          this.isLoading = false; // re enable the submit button
          this.error = false;
          console.log(response);

        },
        (error) => {
          this.responseMessage = this.translate.instant('sections.contact.send_error');
          this.contactForm.enable(); //re enable the form after a success
          this.submitted = true; //show the response message
          this.isLoading = false; // re enable the submit button
          this.error = true;
          console.log(error);
        }
      )
    }
    else {
      this.responseMessage = this.translate.instant('sections.contact.form_not_valid');
      console.log("🚀 ~ file: contact.component.ts ~ line 84 ~ ContactComponent ~ onSubmit ~ responseMessage", this.responseMessage);
      this.submitted = true;
      this.error = true;
    }

  }
}
