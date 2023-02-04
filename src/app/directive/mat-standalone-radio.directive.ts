import {
  AfterViewInit,
  Directive,
  ElementRef,
  forwardRef,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[standaloneRadio]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StandaloneRadio),
      multi: true,
    },
  ],
})
export class StandaloneRadio
  implements ControlValueAccessor, OnDestroy, AfterViewInit {
  private subscription: Subscription;
  constructor(
    private button: MatRadioButton,
    private el: ElementRef<HTMLElement>
  ) {
    this.subscription = button.change.subscribe(() => {
      if (this.button.checked) {
        this.onChange(this.button.value);
      }
    });
  }

  onChange: (value: any) => void = () => { };
  onTouch: () => void = () => { };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean) {
    this.button.disabled = disabled;
  }

  writeValue(value: any) {
    this.button.checked = this.button.value === value;
  }

  ngAfterViewInit() {
    this.el.nativeElement
      .querySelector('input')
      ?.addEventListener('blur', () => {
        this.onTouch();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


/*
// usage

<form [formGroup]="formGroup">
  <mat-radio-button standaloneRadio name="item" value="lorem" formControlName="item">
    Lorem
  </mat-radio-button>
  </form>

*/