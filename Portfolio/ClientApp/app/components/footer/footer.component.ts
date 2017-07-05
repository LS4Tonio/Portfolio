﻿import { Component } from "@angular/core";
import { Language, LocaleService } from "angular-l10n";

import { LanguageLocalizationModel } from "../../models/language-localization.model";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.less"]
})
export class FooterComponent {
    @Language() public lang: string;

    public cultures: LanguageLocalizationModel[];
    public currentLanguage: string;

    /**
     * Initializes the available languages and current language
     * @param _locale
     */
    constructor(private _locale: LocaleService) {
        const availableLanguages = _locale.getAvailableLanguages();
        this.cultures = new Array(availableLanguages.length);
        availableLanguages.forEach((value, index) => {
            this.cultures[index] = new LanguageLocalizationModel(value);
        });

        this.currentLanguage = _locale.getCurrentLanguage();
    }

    /**
     * Changes the application display language
     * @param language selected language
     */
    public onLanguageChange(language): void {
        this._locale.setCurrentLanguage(language);
        this.currentLanguage = language;
    }
}