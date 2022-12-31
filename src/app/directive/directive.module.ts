import { NgModule } from "@angular/core";
import { DomChangeDirective } from "./dom-change.directive";
import { ImageErrorDirective } from "./image-error.directive";

@NgModule({
  declarations: [ImageErrorDirective, DomChangeDirective],
  exports: [DomChangeDirective, ImageErrorDirective]
})
export class DirectiveModule {}
