import { RouterModule } from "@angular/router";

// Containers Components
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { HomeComponent } from "../components/home/home.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ProjectDetailComponent } from "../components/project-detail/project-detail.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { SkillDetailComponent } from "../components/skill-detail/skill-detail.component";

// Child Components
import { HumanSkillsComponent } from "../components/human-skills/human-skills.component";
import { TechnicSkillsComponent } from "../components/technic-skills/technic-skills.component";

export const routing = RouterModule.forRoot([
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "projects/:name",
        component: ProjectDetailComponent
    },
    {
        path: "skills",
        component: SkillsComponent
    },
    {
        path: "skills/human",
        component: HumanSkillsComponent
    },
    {
        path: "skills/technic",
        component: TechnicSkillsComponent
    },
    {
        path: "skills/:type/:name",
        component: SkillDetailComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
]);