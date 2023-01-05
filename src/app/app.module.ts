import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NetworkInterceptor } from "./interceptors/network.interceptor";
import { PipesModule } from "./pipes/pipes.module";
import { MaterialsModule } from "./materials.module";
import { CustomModule } from "./custom/custom.module";
import { DirectiveModule } from "./directive/directive.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    MaterialsModule,

    PipesModule,
    DirectiveModule,
    CustomModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
