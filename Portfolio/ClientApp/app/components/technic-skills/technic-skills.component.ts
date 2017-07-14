import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { SkillModel, Skills } from "../../models/skill.model";

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
            new SkillModel(Skills.CSharp),
            new SkillModel(Skills.AspNet),
            new SkillModel(Skills.HtmlCss),
            new SkillModel(Skills.Javascript),
            new SkillModel(Skills.SassLess),
            new SkillModel(Skills.Angular)
        ];
    }
}