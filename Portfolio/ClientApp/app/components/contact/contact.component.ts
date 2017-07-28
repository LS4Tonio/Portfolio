import { Component } from "@angular/core";
import { Language } from "angular-l10n";

import { ContactService } from "../../services/contact.service";
import { ContactModel } from "../../models/contact.model";

@Component({
    selector: "contact",
    styleUrls: ["./contact.component.less"],
    templateUrl: "./contact.component.html"
})
export class ContactComponent {
    @Language() public lang: string;

    public contactModel: ContactModel;
    public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public messageResult: boolean;
    public emailSent: boolean = false;

    /**
     * Initializes the contact page
     * @param _contactService Contact API service
     */
    constructor(private _contactService: ContactService) {
        this.contactModel = new ContactModel();
    }

    /**
     * Submits the contact form to server
     */
    public onSubmit() {
        this.emailSent = true;

        this._contactService
            .postMail(this.contactModel)
            .subscribe(this.handleResponse, this.handleError);
    }

    /**
     * Handle the request response
     * @param value response
     */
    private handleResponse(value): void {
        this.messageResult = value.status === 200;
    }

    /**
     * Handles the request error
     * @param error reponse error
     */
    private handleError(error: any): void {
        this.messageResult = false;
    }
}