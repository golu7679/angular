import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarTheme1Service } from "./custom/snackbar/theme1/snackbar-theme1.service";
import { SnackBarTheme2Service } from "./custom/snackbar/theme2/snackbar-theme2.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public snackbar: MatSnackBar,
    public snackBarTheme1Service: SnackBarTheme1Service,
    public snackBarTheme2Service: SnackBarTheme2Service) { }

  ngOnInit(): void { }

  openSnackbar() {
    this.snackbar.open("Default snackbar", "X");
  }
}
