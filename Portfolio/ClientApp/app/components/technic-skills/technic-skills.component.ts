import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "technic-skills",
    templateUrl: "./technic-skills.component.html",
    styleUrls: ["./technic-skills.component.less"]
})
export class TechnicSkillsComponent {
    @Language() public lang: string;
}