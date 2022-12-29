import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor() {}

  private get authHeader() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      Authorization: `Token ${token ?? ""}`
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      url: environment.baseUrl + request.url,
      headers: this.authHeader
    });
    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status === 0 && error.error instanceof ProgressEvent) {
          error.error = {
            status: 0,
            message: "Network error, please check your internet connection."
          };
        }
        if (error.status === 401) {
        }
        return throwError(error);
      })
    );
  }
}
