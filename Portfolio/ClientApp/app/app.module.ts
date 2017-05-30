import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UniversalModule } from "angular2-universal";
import { AppComponent } from "./components/app/app.component"
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ProfileComponent,
        ContactComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "projects", component: HomeComponent },
            { path: "skills", component: HomeComponent },
            { path: "technologies", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "contact", component: ContactComponent },
            { path: "**", redirectTo: "home" }
        ])
    ]
})
export class AppModule {
}