export class LanguageLocalizationModel {
    public label: string;
    public value: string;

    constructor(culture: string) {
        this.value = culture;
        this.label = `localization.${culture}`;
    }
}