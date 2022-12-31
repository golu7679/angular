import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarTheme1Service } from "./custom/snackbar/theme1/snackbar-theme1.service";
import { SnackBarTheme2Service } from "./custom/snackbar/theme2/snackbar-theme2.service";
import { JsonToCsvService } from "./services/json-to-csv.service";
import { JsonToExcelService } from "./services/json-to-excel.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  isDarkThemeActive = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public snackbar: MatSnackBar,
    public snackBarTheme1Service: SnackBarTheme1Service,
    public snackBarTheme2Service: SnackBarTheme2Service,
    public json2csv: JsonToCsvService,
    public json2excel: JsonToExcelService
  ) { }

  ngOnInit(): void {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode)
      this.darkModeToggleChange(JSON.parse(darkMode))
  }

  openSnackbar() {
    this.snackbar.open("Default snackbar", "X");
  }

  darkModeToggleChange(newValue: boolean): void {
    if (newValue) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(newValue));
    this.isDarkThemeActive = newValue;
  }

}
