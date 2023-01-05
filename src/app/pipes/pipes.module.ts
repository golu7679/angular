import { NgModule } from "@angular/core";
import { TestPipe } from "./test.pipe";
import { CreateSlugPipe } from "./create-slug.pipe";
import { WrapStringTextPipe } from "./wrap-string-text.pipe";
import { TelephoneNumberFormatPipe } from "./telephone-number-format.pipe";

@NgModule({
  declarations: [TestPipe, CreateSlugPipe, WrapStringTextPipe, TelephoneNumberFormatPipe],
  imports: [],
  exports: [TestPipe]
})
export class PipesModule {}
