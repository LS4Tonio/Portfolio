import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { LanguageScoreModel } from "../../models/language-score.model";

@Component({
    selector: "about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.less"]
})
export class AboutComponent {
    @Language() public lang: string;

    public currentAge: number;
    public languages: LanguageScoreModel[] = [];

    constructor() {
        this.currentAge = new Date().getFullYear() - 1994;
    }
}