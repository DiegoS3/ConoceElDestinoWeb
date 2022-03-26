import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup(
    {
      case: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      description: new FormControl('', Validators.required)
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
