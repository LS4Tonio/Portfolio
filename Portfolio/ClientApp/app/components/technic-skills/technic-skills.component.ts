import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { SkillModel } from "../../models/skill.model";

@Component({
    selector: "technic-skills",
    templateUrl: "./technic-skills.component.html",
    styleUrls: ["./technic-skills.component.less"]
})
export class TechnicSkillsComponent {
    @Language() public lang: string;

    public technicalSkills: SkillModel[];

    constructor() {
        this.technicalSkills = [
            new SkillModel("CSharp"),
            new SkillModel("ASP .Net"),
            new SkillModel("HTML CSS"),
            new SkillModel("Javascript"),
            new SkillModel("SASS LESS"),
            new SkillModel("Angular")
        ];
    }
}