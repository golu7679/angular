import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Theme1Component } from "./snackbar/theme1/theme1.component";
import { MaterialsModule } from "../materials.module";
import { CustomCheckboxComponent } from "./forms/custom-checkbox-2/custom-checkbox-2";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [Theme1Component, CustomCheckboxComponent],
  imports: [CommonModule, MaterialsModule, FormsModule, ReactiveFormsModule],
  exports: [Theme1Component]
})
export class CustomModule { }
