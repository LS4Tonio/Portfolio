import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule, CollapseModule } from "ngx-bootstrap";
import { LocalizationModule } from "angular-l10n";

// Configuration
import { routing } from "./app.routes.config";

// Directives imports
import { ImageSrcDirective } from "../directives/image-src.directive";

// Behavior components
import { BackButtonComponent } from "../components/back-button/back-button.component";
import { RatingComponent } from "../components/rating/rating.component";

// Components imports
import { AboutComponent } from "../components/about/about.component";
import { AppComponent } from "../components/app/app.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HomeComponent } from "../components/home/home.component";
import { NavMenuComponent } from "../components/navmenu/navmenu.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ProjectDetailComponent } from "../components/project-detail/project-detail.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { SkillDetailComponent } from "../components/skill-detail/skill-detail.component";

// Child components import
import { HumanSkillsComponent } from "../components/human-skills/human-skills.component";
import { TechnicSkillsComponent } from "../components/technic-skills/technic-skills.component";

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        // Directives
        ImageSrcDirective,

        // Behavior components
        BackButtonComponent,
        RatingComponent,

        // Components
        AppComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent,
        NavMenuComponent,
        ProjectsComponent,
        ProjectDetailComponent,
        SkillsComponent,
        SkillDetailComponent,

        // Child components
        HumanSkillsComponent,
        TechnicSkillsComponent
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