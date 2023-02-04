import { NgModule } from "@angular/core";
import { DomChangeDirective } from "./dom-change.directive";
import { ImageErrorDirective } from "./image-error.directive";
import { MatStandaloneRadioDirective } from './mat-standalone-radio.directive';

@NgModule({
  declarations: [ImageErrorDirective, DomChangeDirective, MatStandaloneRadioDirective],
  exports: [DomChangeDirective, ImageErrorDirective]
})
export class DirectiveModule {}
