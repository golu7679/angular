import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: "app-theme1",
  templateUrl: "./theme1.component.html",
  styleUrls: ["./theme1.component.scss"]
})
export class Theme1Component {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  close() {
    this.data.snackbar.dismiss();
  }
}
