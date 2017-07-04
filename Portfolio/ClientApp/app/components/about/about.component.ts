import { Component } from "@angular/core";

import { LanguageModel } from "../../models/language.model";
import { ResourceService } from "../../services/resources/resource.service";

@Component({
    providers: [ResourceService],
    selector: "about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent {
    public languages: LanguageModel[];
    public resources: object;

    constructor(resources: ResourceService) {
        this.resources = resources.getAboutPageLabels();
        this.languages = resources.getLanguagesList();
    }
}