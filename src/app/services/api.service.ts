import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getApi() {
    return this.http.get("your_path");
  }

  postApi(formData: FormData) {
    return this.http.post("url", formData);
  }

  
}