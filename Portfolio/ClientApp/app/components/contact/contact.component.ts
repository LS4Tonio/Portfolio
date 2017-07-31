import { Component, ViewChild } from "@angular/core";
import { Language } from "angular-l10n";
import { ReCaptchaComponent } from 'angular2-recaptcha';

import { ContactService } from "../../services/contact.service";
import { ContactModel } from "../../models/contact.model";

@Component({
    selector: "contact",
    styleUrls: ["./contact.component.less"],
    templateUrl: "./contact.component.html"
})
export class ContactComponent {
    @ViewChild(ReCaptchaComponent) private _captcha: ReCaptchaComponent;
    @Language() public lang: string;

    public contactModel: ContactModel;
    public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public emailSent: boolean = false;
    public emailResult: number = 0;
    public captchaValid: boolean = false;

    /**
     * Initializes the contact page
     * @param _contactService Contact API service
     */
    constructor(private _contactService: ContactService) {
        this.contactModel = new ContactModel();
    }

    /**
     * Resets the captcha when expire
     */
    public handleCaptchaExpired(): void {
        this._captcha.reset();
    }

    /**
     * Allows user to valid it's form when captcha is correct
     * @param token response token
     */
    public handleCorrectCaptcha(token) {
        this.captchaValid = !!token;
    }

    /**
     * Submits the contact form to server
     */
    public onSubmit() {
        this.emailSent = true;

        this._contactService
            .postMail(this.contactModel)
            .subscribe(this.handleResponse, this.handleError);

        this._captcha.reset();
    }

    /**
     * Handle the request response
     * @param value response
     */
    private handleResponse(value: any): void {
        this.emailResult = value.status;
        console.log("success", this.emailResult);
    }

    /**
     * Handles the request error
     * @param error reponse error
     */
    private handleError(error: any): void {
        this.emailResult = error.status;
        console.log("error", this.emailResult);
    }
}