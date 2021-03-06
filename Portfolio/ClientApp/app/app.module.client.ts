import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocaleService, TranslationService } from "angular-l10n";

import { sharedConfig } from "./configuration/app.module.shared";

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: "ORIGIN_URL", useValue: location.origin },
        ...sharedConfig.providers
    ]
})
export class AppModule {
    constructor(public locale: LocaleService, public translation: TranslationService) {
        // Define default site language
        this.locale.addConfiguration()
            .addLanguages(["en", "fr"])
            .setCookieExpiration(30)
            .defineDefaultLocale("fr", "FR")
            .defineLanguage("fr");

        // Enable translations from localization files
        this.translation.addConfiguration()
            .addProvider("./assets/localization/locale-");
        this.translation.init();
    }
}