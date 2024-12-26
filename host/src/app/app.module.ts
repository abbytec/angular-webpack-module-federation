import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";

const routes: Routes = [
	{
		path: "about-us",
		loadChildren: () => import("aboutUs/AboutUsModule").then((m) => m.AboutUsModule),
	},
	{
		path: "homepage",
		loadChildren: () => import("homePage/HomePageModule").then((m) => m.HomePageModule),
	},
];

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatToolbarModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
