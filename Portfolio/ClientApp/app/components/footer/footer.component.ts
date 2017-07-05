import { Component } from "@angular/core";

import { LanguageLocalizationModel } from "../../models/language-localization.model";
import { ResourceService } from "../../services/resources/resource.service";

@Component({
    providers: [ResourceService],
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
    public cultures: LanguageLocalizationModel[];
    public resources: object;

    constructor(resources: ResourceService) {
        this.resources = resources.getFooterLabels();
        this.cultures = resources.getLanguagesLocalizationList();
    }
}