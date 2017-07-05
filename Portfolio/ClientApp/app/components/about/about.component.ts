import { Component } from "@angular/core";

import { LanguageScoreModel } from "../../models/language-score.model";
import { ResourceService } from "../../services/resources/resource.service";

@Component({
    providers: [ResourceService],
    selector: "about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent {
    public languages: LanguageScoreModel[];
    public resources: object;

    constructor(resources: ResourceService) {
        this.resources = resources.getAboutPageLabels();
        this.languages = resources.getLanguagesScoreList();
    }
}