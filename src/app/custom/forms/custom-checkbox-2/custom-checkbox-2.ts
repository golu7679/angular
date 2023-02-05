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
    contains(value: any): boolean {
        if (this.selectedItemList instanceof Array) {
            return this.selectedItemList.indexOf(value) > -1;
        } else if (!!this.selectedItemList) {
            return this.selectedItemList === value;
        }

        return false;
    }

    private add(value: any) {
        if (!this.contains(value)) {
            if (this.selectedItemList instanceof Array) {
                this.selectedItemList.push(value);
            } else {
                this.selectedItemList = [value];
            }
            this.onChange(this.selectedItemList);
        }
    }

    private remove(value: any) {
        const index = this.selectedItemList.indexOf(value);
        if (!this.selectedItemList || index < 0) {
            return;
        }

        this.selectedItemList.splice(index, 1);
        this.onChange(this.selectedItemList);
    }

    update(event: boolean) {
        if (!event && this.contains(this.value)) {
            this.remove(this.value)
        }
        else {
            this.add(this.value);
        }
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