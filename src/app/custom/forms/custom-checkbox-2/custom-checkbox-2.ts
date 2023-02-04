import { Component, OnInit, forwardRef, Input, ElementRef } from "@angular/core";
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
    selector: "app-custom-check-box",
    template: `<label class="checkbox-container">
    <mat-checkbox [ngModel]="checked" (change)="update($event.checked)">
        <ng-content> </ng-content>
    </mat-checkbox>
</label>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomCheckboxComponent),
            multi: true
        }
    ]
})

export class CustomCheckboxComponent implements ControlValueAccessor, OnInit {

    @Input() value: string = '';
    selectedItemList: string[] = [];

    onChange: any = () => { };
    onTouch: any = () => { };

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    constructor(private el: ElementRef<HTMLElement>
    ) {
        // this.checkboxDta.change.subscribe(() => {
        //   console.log(checkboxDta.checked)
        // })
    }

    update(event: boolean) {
        console.log(event)
        if (event) {
            this.selectedItemList.push(this.value)
        }
        else {
            // const index = this.selectedItemList.indexOf(this.value);
            // console.log(index)
            // if (index !== -1) {
            //   this.selectedItemList = this.selectedItemList.slice(index, 1);
            // }
            this.selectedItemList = this.selectedItemList.filter(arrayItem => !this.selectedItemList.includes(this.value));

        }
        console.log(this.selectedItemList);
        this.onChange(this.selectedItemList);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        // this.el.nativeElement
        //   .querySelector('input')
        //   ?.addEventListener('blur', () => {
        //     this.onTouch();
        //   });
    }

    checked: boolean = false;
    writeValue(checked: string[] | string) {
        console.log('checked', checked)
        if (Array.isArray(checked))
            this.selectedItemList = checked;
        else
            this.selectedItemList.push(checked)
        this.checked = this.selectedItemList.includes(this.value);
    }

    setDisabledState(isDisabled: boolean): void {

    }

}