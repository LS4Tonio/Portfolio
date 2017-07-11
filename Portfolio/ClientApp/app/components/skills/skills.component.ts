import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { SkillModel } from "../../models/skill.model";

@Component({
    selector: "skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.less"]
})
export class SkillsComponent {
    @Language() public lang: string;

    public technicalSkills: SkillModel[];

    public imgHumanSkill: any = require("./../../../assets/images/skills/human.png");
    public imgTechSkill: any = require("./../../../assets/images/skills/tech.png");

    constructor() {
        this.technicalSkills = [
            new SkillModel("CSharp"),
            new SkillModel("ASP DotNet"),
            new SkillModel("HTML CSS"),
            new SkillModel("Javascript"),
            new SkillModel("SCSS LESS"),
            new SkillModel("Angular")
        ];

        //var humanSkills = [
        //    new SkillModel("Serious"),
        //    new SkillModel("Adaptation"),
        //    new SkillModel("Autonomy"),
        //    new SkillModel("Team Work")
        //];
    }
}