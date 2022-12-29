import { NgModule } from "@angular/core";
import { TestPipe } from "./test.pipe";
import { CreateSlugPipe } from "./create-slug.pipe";
import { WrapStringTextPipe } from "./wrap-string-text.pipe";

@NgModule({
  declarations: [TestPipe, CreateSlugPipe, WrapStringTextPipe],
  imports: [],
  exports: [TestPipe]
})
export class PipesModule {}
