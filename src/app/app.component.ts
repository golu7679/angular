import { Component } from "@angular/core";
import { SnackBarTheme1Service } from "./custom/snackbar/theme1/snackbar-theme1.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public snackBarTheme1Service: SnackBarTheme1Service) { }

  ngOnInit(): void { }
}
