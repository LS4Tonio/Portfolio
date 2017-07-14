import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { SkillModel, TechnicalSkills, SkillsType } from "../../models/skill.model";

@Component({
    selector: "technic-skills",
    templateUrl: "./technic-skills.component.html",
    styleUrls: ["./technic-skills.component.less"]
})
export class TechnicSkillsComponent {
    @Language() public lang: string;

    public technicalSkills: SkillModel[];

    constructor() {
        const objEnum = Object.keys(TechnicalSkills)
            .map(k => TechnicalSkills[k] as TechnicalSkills);
        this.technicalSkills = objEnum
            .filter(v => typeof v === "string")
            .map(v => new SkillModel(v.toString(), SkillsType[SkillsType.Technic]));
    }
}