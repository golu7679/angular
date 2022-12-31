import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Theme1Component } from "./theme1.component";

@Injectable({
  providedIn: "root"
})
export class SnackBarTheme1Service {
  private config: MatSnackBarConfig;

  constructor(private snackbar: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["theme1-snackbar"];
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "right";
    this.config.duration = 15000;
  }

  error(message?: string, duration?: number) {
    this.config.panelClass = ["theme1-snackbar", "theme1-error"];
    this.config.data = {
      message,
      icon: "cancel",
      snackbar: this.snackbar
    };
    this.config.duration = duration || this.config.duration;
    this.show();
  }

  success(message?: string) {
    this.config.data = {
      message,
      icon: "check_circle",
      snackbar: this.snackbar
    };
    this.config.panelClass = ["theme1-snackbar", "theme1-success"];
    this.show();
  }

  warning(message?: string) {
    this.config.data = {
      message,
      icon: "warning",
      snackbar: this.snackbar
    };
    this.config.panelClass = ["theme1-snackbar", "theme1-warning"];
    this.show();
  }

  info(message?: string) {
    this.config.data = {
      message,
      icon: "info",
      snackbar: this.snackbar
    };
    this.config.panelClass = ["theme1-snackbar", "theme1-info"];
    this.show();
  }

  private show(config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.openFromComponent(Theme1Component, config);
    });
  }
}
