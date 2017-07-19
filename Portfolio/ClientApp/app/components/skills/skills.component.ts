import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.less"]
})
export class SkillsComponent {
    @Language() public lang: string;

    public imgHumanSkill: string = "skills/human.png";
    public imgTechSkill: string = "skills/tech.png";
}