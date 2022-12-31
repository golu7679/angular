import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnackBarTheme2Service {
  actionText = "OKAY";
  constructor(private snackbar: MatSnackBar) {}

  success(message: string) {
    this.snackbar.open(message, this.actionText, {
      panelClass: ["theme2-snackbar", "theme2-success"]
    });
  }

  error(message: string) {
    this.snackbar.open(message, this.actionText, {
      panelClass: ["theme2-snackbar", "theme2-error"]
    });
  }

  warning(message: string) {
    this.snackbar.open(message, this.actionText, {
      panelClass: ["theme2-snackbar", "theme2-warning"]
    });
  }

  info(message: string) {
    this.snackbar.open(message, this.actionText, {
      panelClass: ["theme2-snackbar", "theme2-info"]
    });
  }
}
