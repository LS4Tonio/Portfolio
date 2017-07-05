import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule, CollapseModule } from "ngx-bootstrap";
import { LocalizationModule } from "angular-l10n";

// Configuration
import { routing } from "./app.routes.config";

// Directives imports
import { OnFocusDirective } from "../directives/on-focus.directive";

// Components imports
import { AboutComponent } from "../components/about/about.component";
import { AppComponent } from "../components/app/app.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HomeComponent } from "../components/home/home.component";
import { NavMenuComponent } from "../components/navmenu/navmenu.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { SkillsComponent } from "../components/skills/skills.component";

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        // Directives
        OnFocusDirective,

        // Components
        AppComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent,
        NavMenuComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        routing,
        AccordionModule.forRoot(),
        CollapseModule.forRoot(),
        LocalizationModule.forRoot()
    ]
};