import { Component, Input } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "help-block-validation",
    templateUrl: "./help-block-validation.component.html",
    styleUrls: ["./help-block-validation.component.less"]
})
export class HelpBlockValidationComponent {
    @Language() public lang: string;

    @Input("validation-text-key") public validationTextKey: string = "";
}