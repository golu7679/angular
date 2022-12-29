import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  private config: MatSnackBarConfig;

  constructor(private snackbar: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["custom-snackbar-container"];
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "right";
    this.config.duration = 1500;
  }

  error(message: string, duration?: number) {
    this.config.panelClass = ["custom-snackbar-container", "error"];
    this.config.duration = duration || this.config.duration;
    this.show(message);
  }

  success(message: string) {
    this.config.panelClass = ["custom-snackbar-container", "success"];
    this.show(message);
  }

  warning(message: string) {
    this.config.panelClass = ["custom-snackbar-container", "warning"];
    this.show(message);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.open(message, "x", config);
    });
  }
}
