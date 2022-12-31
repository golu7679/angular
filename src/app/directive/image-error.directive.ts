import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[src]"
})
export class ImageErrorDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.elementRef.nativeElement.src = "assets/image/image_placeholder.jpg";
  }
}

/*
| Use
| Just import this component in your module, you don't need to change anything in img tag
|
*/
