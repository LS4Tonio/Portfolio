import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CollapseModule } from "ngx-bootstrap";

import { AppComponent } from "./components/app/app.component"
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "about", component: AboutComponent },
            { path: "contact", component: ContactComponent },
            { path: "home", component: HomeComponent },
            { path: "projects", component: ProjectsComponent },
            { path: "skills", component: SkillsComponent },
            { path: "**", redirectTo: "home" }
        ]),
        CollapseModule.forRoot()
    ]
};