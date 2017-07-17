import { Component, Input } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "back-button",
    templateUrl: "./back-button.component.html",
    styleUrls: ["./back-button.component.less"]
})
export class BackButtonComponent {
    @Language() public lang: string;

    @Input() public route: string = "";
    @Input() public displayText: boolean = false;
}