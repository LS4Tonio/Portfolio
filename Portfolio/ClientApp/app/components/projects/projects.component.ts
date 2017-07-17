import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { ProjectModel, Projects } from "../../models/project.model";

@Component({
    selector: "projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.less"]
})
export class ProjectsComponent {
    @Language() public lang: string;

    public projects: ProjectModel[];

    constructor() {
        const objEnum = Object.keys(Projects)
            .map(k => Projects[k] as Projects);
        this.projects = objEnum
            .filter(v => typeof v === "string")
            .map(v => new ProjectModel(v.toString()));
    }
}