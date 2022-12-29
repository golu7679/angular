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

  error(message: string, duration?: number) {
    this.config.panelClass = ["theme1-snackbar", "theme1-error"];
    this.config.data = {
      icon: 'cancel'
    }
    this.config.duration = duration || this.config.duration;
    this.show(message);
  }

  success(message: string) {
    this.config.data = {
      icon: 'check_circle'
    }
    this.config.panelClass = ["theme1-snackbar", "theme1-success"];
    this.show(message);
  }

  warning(message: string) {
    this.config.data = {
      icon: 'warning'
    }
    this.config.panelClass = ["theme1-snackbar", "theme1-warning"];
    this.show(message);
  }

  info(message: string) {
    this.config.data = {
      icon: 'info'
    }
    this.config.panelClass = ["theme1-snackbar", "theme1-info"];
    this.show(message);
  }


  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      // this.snackbar.open(message, "x", config);
      this.snackbar.openFromComponent(Theme1Component, config);
    });
  }
}
