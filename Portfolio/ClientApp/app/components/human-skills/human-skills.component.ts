import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { SkillModel, HumanSkills, SkillsType } from "../../models/skill.model";

@Component({
    selector: "human-skills",
    templateUrl: "./human-skills.component.html",
    styleUrls: ["./human-skills.component.less"]
})
export class HumanSkillsComponent {
    @Language() public lang: string;

    public humanSkills: SkillModel[];

    constructor() {
        const objEnum = Object.keys(HumanSkills)
            .map(k => HumanSkills[k]);
        this.humanSkills = objEnum
            .filter(v => typeof v === "string")
            .map(v => new SkillModel(v.toString(), SkillsType[SkillsType.Human]));
    }
}