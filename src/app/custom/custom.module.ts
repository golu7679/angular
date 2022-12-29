import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Theme1Component } from "./snackbar/theme1/theme1.component";
import { Theme2Component } from "./snackbar/theme2/theme2.component";
import { MaterialsModule } from "../materials.module";

@NgModule({
  declarations: [Theme1Component, Theme2Component],
  imports: [CommonModule, MaterialsModule],
  exports: [Theme1Component, Theme2Component]
})
export class CustomModule {}
