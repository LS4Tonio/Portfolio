import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.less"]
})
export class AboutComponent {
    @Language() public lang: string;

    public imageSrc: string;
    public languages: string[];

    constructor() {
        this.imageSrc = "me-whited.jpg";
        this.languages = [
            "fr",
            "en"
        ];
    }
}