import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { LanguageLocalizationModel } from "../../models/language-localization.model";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
    @Language() public lang: string;

    public cultures: LanguageLocalizationModel[] = [];

    constructor() { }
}