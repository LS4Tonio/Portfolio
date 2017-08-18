import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "about-me",
    templateUrl: "./about-me.component.html"
})
export class AboutMeComponent {
    @Language() public lang: string;

    public age: number;

    constructor() {
        this.age = new Date().getFullYear() - 1994;
    }
}