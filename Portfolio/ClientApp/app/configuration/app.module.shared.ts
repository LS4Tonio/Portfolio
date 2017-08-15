import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule, CollapseModule } from "ngx-bootstrap";
import { LocalizationModule } from "angular-l10n";

// Configuration
import { routing } from "./app.routes.config";

// Services
import { ContactService } from "../services/contact.service";
import { ReCaptchaService } from "../services/recaptcha.service";

// Directives imports
import { ComponentHostDirective } from "../directives/component-host.directive";
import { ImageSrcDirective } from "../directives/image-src.directive";

// Behavior components
import { BackButtonComponent } from "../components/back-button/back-button.component";
import { HelpBlockValidationComponent } from "../components/help-block-validation/help-block-validation.component";
import { RatingComponent } from "../components/rating/rating.component";

// Components imports
import { AboutComponent } from "../components/about/about.component";
import { AlertComponent } from "../components/alert/alert.component";
import { AppComponent } from "../components/app/app.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HomeComponent } from "../components/home/home.component";
import { NavMenuComponent } from "../components/navmenu/navmenu.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ProjectDetailComponent } from "../components/project-detail/project-detail.component";
import { ReCaptchaComponent } from "../components/recaptcha/recaptcha.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { SkillDetailComponent } from "../components/skill-detail/skill-detail.component";
import { SkillDynamicLoaderComponent } from "../components/skill-dynamic-loader/skill-dynamic-loader.component";

// Child components import
import { HumanSkillsComponent } from "../components/human-skills/human-skills.component";
import { TechnicSkillsComponent } from "../components/technic-skills/technic-skills.component";

// Skills component templates
import { SkillAdaptabilityComponent } from "../components/skill/adaptability/skill-adaptability.component";
import { SkillAngularComponent } from "../components/skill/angular/skill-angular.component";
import { SkillAspnetComponent } from "../components/skill/aspnet/skill-aspnet.component";
import { SkillAutonomyComponent } from "../components/skill/autonomy/skill-autonomy.component";
import { SkillCsharpComponent } from "../components/skill/csharp/skill-csharp.component";
import { SkillHtmlcssComponent } from "../components/skill/htmlcss/skill-htmlcss.component";
import { SkillJavascriptComponent } from "../components/skill/javascript/skill-javascript.component";
import { SkillSasslessComponent } from "../components/skill/sassless/skill-sassless.component";
import { SkillSeriousComponent } from "../components/skill/serious/skill-serious.component";
import { SkillTeamworkComponent } from "../components/skill/teamwork/skill-teamwork.component";

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        // Directives
        ComponentHostDirective,
        ImageSrcDirective,

        // Behavior components
        BackButtonComponent,
        HelpBlockValidationComponent,
        RatingComponent,

        // Components
        AppComponent,
        AboutComponent,
        AlertComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent,
        NavMenuComponent,
        ProjectsComponent,
        ProjectDetailComponent,
        ReCaptchaComponent,
        SkillsComponent,
        SkillDetailComponent,
        SkillDynamicLoaderComponent,

        // Child components
        HumanSkillsComponent,
        TechnicSkillsComponent,

        // Skills components templates
        SkillAdaptabilityComponent,
        SkillAngularComponent,
        SkillAspnetComponent,
        SkillAutonomyComponent,
        SkillCsharpComponent,
        SkillHtmlcssComponent,
        SkillJavascriptComponent,
        SkillSasslessComponent,
        SkillSeriousComponent,
        SkillTeamworkComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        routing,
        AccordionModule.forRoot(),
        CollapseModule.forRoot(),
        LocalizationModule.forRoot()
    ],
    providers: [
        ContactService,
        ReCaptchaService
    ]
};