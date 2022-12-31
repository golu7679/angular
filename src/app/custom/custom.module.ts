import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Theme1Component } from "./snackbar/theme1/theme1.component";
import { MaterialsModule } from "../materials.module";

@NgModule({
  declarations: [Theme1Component],
  imports: [CommonModule, MaterialsModule],
  exports: [Theme1Component]
})
export class CustomModule {}
