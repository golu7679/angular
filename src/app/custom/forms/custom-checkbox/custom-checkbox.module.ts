import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CheckboxComponent } from './checkbox.component';
import { MaterialsModule } from 'src/app/materials.module';



@NgModule({
  declarations: [CheckboxGroupComponent, CheckboxComponent],
  imports: [
    MaterialsModule
  ],
  exports: [CheckboxGroupComponent, CheckboxComponent],
})
export class CustomCheckboxModule { }
