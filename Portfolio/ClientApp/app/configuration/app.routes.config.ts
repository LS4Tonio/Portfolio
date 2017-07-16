import { RouterModule } from "@angular/router";

// Containers Components
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { HomeComponent } from "../components/home/home.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { SkillDetailComponent } from "../components/skill-detail/skill-detail.component";
import { TestComponent } from "../components/test/test.component";

// Child Components
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
        path: "skills",
        component: SkillsComponent
    },
    {
        path: "skills/human",
        component: TechnicSkillsComponent
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
        path: "test/css",
        component: TestComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
]);