import { AbstractControl, FormBuilder, ValidatorFn, Validators } from "@angular/forms";

// purpose => compare two formcontrols values, if both are not same, you will get an validation error

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        // assigning the error in confirmPassword formcontrol 
        return { matching: true };
      } else {
        controls.get(checkControlName)?.setErrors(null);
        return null;
      }
    };
  }
}

/*
FormBuilder.group(
    {
        password: [
            '',
            [Validators.required],
        ],
        confirmPassword: [
            '',
            [Validators.required],
        ],
    },
    {
        validator: [Validation.match('password', 'confirmPassword')],
    },
);


*/