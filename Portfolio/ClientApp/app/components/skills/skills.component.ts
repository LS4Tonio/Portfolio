import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.less"]
})
export class SkillsComponent {
    @Language() public lang: string;

    public imgHumanSkill: any = require("./../../../assets/images/skills/human.png");
    public imgTechSkill: any = require("./../../../assets/images/skills/tech.png");
}