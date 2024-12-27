import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";
import "zone.js";

const routes: Routes = [
  {
    path: "",
    redirectTo: "homepage", // Redirige a la página deseada
    pathMatch: "full", // Asegúrate de usar "full" para coincidir con la raíz exacta
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("aboutUs/AboutUsModule").then((m) => m.AboutUsModule),
  },
  {
    path: "homepage",
    loadChildren: () =>
      import("homePage/HomePageModule").then((m) => m.HomePageModule),
  },
];

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatToolbarModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
