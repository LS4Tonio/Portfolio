import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { ContactModel } from "../../models/contact.model";

@Component({
    selector: "contact",
    styleUrls: ["./contact.component.css"],
    templateUrl: "./contact.component.html"
})
export class ContactComponent {
    @Language() public lang: string;

    public contactModel: ContactModel;
    public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public formSubmitted: boolean;

    constructor() {
        this.contactModel = new ContactModel();
    }

    public onSubmit() {
        this.formSubmitted = true;
    }
}