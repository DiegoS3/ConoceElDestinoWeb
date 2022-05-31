import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: "[totalPeopleValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TotalPeopleDirective,
      multi: true
    }
  ]
})

export class TotalPeopleDirective implements Validator {

  constructor() { }

  // here control is the formgroup
  validate(control: AbstractControl): ValidationErrors | null {
    if (control && control.get("adults") && control.get("childs")) {

      // the form controls and their value
      const adults = control.get("adults")!.value;
      const childs = control.get("childs")!.value;

      // not valid, return an error
      if (adults + childs <= 0) {
        return { error: true };
      }
      // valid
      return null;
    }
    // form controls do not exist yet, return null
    return null;
  }

}
